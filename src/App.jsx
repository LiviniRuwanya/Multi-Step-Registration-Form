import React, { useState, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ProgressBar from './components/ProgressBar'
import PersonalInfoStep from './components/PersonalInfoStep'
import PreferencesStep from './components/PreferencesStep'
import ConfirmationStep from './components/ConfirmationStep'
import SuccessStep from './components/SuccessStep'

// Validation schemas for each step
const personalInfoSchema = yup.object({
  firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters'),
  lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
  gender: yup.string().required('Please select your gender')
})

const preferencesSchema = yup.object({
  newsletter: yup.boolean(),
  contactMethod: yup.string().required('Please select your preferred contact method'),
  interests: yup.array().min(1, 'Please select at least one interest')
})

const steps = [
  { id: 1, title: 'Personal Info', component: PersonalInfoStep, schema: personalInfoSchema },
  { id: 2, title: 'Preferences', component: PreferencesStep, schema: preferencesSchema },
  { id: 3, title: 'Confirmation', component: ConfirmationStep },
  { id: 4, title: 'Success', component: SuccessStep }
]

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize form with react-hook-form
  const methods = useForm({
    resolver: yupResolver(steps[currentStep - 1]?.schema || yup.object()),
    mode: 'onChange'
  })

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('multiStepFormData')
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      setFormData(parsedData)
      // Set form values
      Object.keys(parsedData).forEach(key => {
        methods.setValue(key, parsedData[key])
      })
    }
  }, [methods])

  // Save data to localStorage whenever formData changes
  useEffect(() => {
    if (Object.keys(formData).length > 0) {
      localStorage.setItem('multiStepFormData', JSON.stringify(formData))
      // simple autosave toast
      const toast = document.getElementById('autosave-toast')
      if (toast) {
        toast.classList.remove('opacity-0', 'translate-y-2')
        toast.classList.add('opacity-100', 'translate-y-0')
        setTimeout(() => {
          toast.classList.remove('opacity-100', 'translate-y-0')
          toast.classList.add('opacity-0', 'translate-y-2')
        }, 1200)
      }
    }
  }, [formData])

  const nextStep = async () => {
    const isValid = await methods.trigger()
    if (isValid) {
      const currentValues = methods.getValues()
      setFormData(prev => ({ ...prev, ...currentValues }))
      
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1)
        // Update form resolver for next step
        if (steps[currentStep]?.schema) {
          methods.clearErrors()
          methods.reset(currentValues)
        }
      }
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
      // Update form resolver for previous step
      if (steps[currentStep - 2]?.schema) {
        methods.clearErrors()
        methods.reset(formData)
      }
    }
  }

  const handleSubmit = async () => {
    const isValid = await methods.trigger()
    if (isValid) {
      const finalValues = methods.getValues()
      setFormData(prev => ({ ...prev, ...finalValues }))
      setIsSubmitted(true)
      setCurrentStep(4)
      // Clear localStorage after successful submission
      localStorage.removeItem('multiStepFormData')
    }
  }

  const resetForm = () => {
    setCurrentStep(1)
    setFormData({})
    setIsSubmitted(false)
    methods.reset({})
    localStorage.removeItem('multiStepFormData')
  }

  const CurrentStepComponent = steps[currentStep - 1]?.component

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="animated-blob one" />
      <div className="animated-blob two" />
      <div className="animated-blob three" />
      <div className="max-w-2xl mx-auto">
        {/* Autosave toast */}
        <div id="autosave-toast" className="fixed left-1/2 -translate-x-1/2 top-6 z-50 px-4 py-2 rounded-full bg-gray-900/90 text-white text-sm shadow-lg transition-all duration-300 opacity-0 translate-y-2">
          Changes saved
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8 bg-radial">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 drop-shadow-glow">
              Multi-Step Registration Form
            </h1>
            <p className="text-gray-600">
              Complete your registration in just a few simple steps
            </p>
          </div>

          {/* Progress Bar */}
          <ProgressBar currentStep={currentStep} totalSteps={steps.length} steps={steps} />

          {/* Form Content */}
          <div className="mt-8 animate-fade-in">
            <FormProvider {...methods}>
              <CurrentStepComponent
                methods={methods}
                formData={formData}
                currentStep={currentStep}
                onNext={nextStep}
                onPrev={prevStep}
                onSubmit={handleSubmit}
                onReset={resetForm}
              />
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
