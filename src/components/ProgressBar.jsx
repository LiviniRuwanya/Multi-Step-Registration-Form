import React from 'react'

const ProgressBar = ({ currentStep, totalSteps, steps }) => {
  const progressPercent = Math.min(100, Math.max(0, ((currentStep - 1) / (totalSteps - 1)) * 100))

  return (
    <div className="mb-8">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => {
          const isActive = currentStep === step.id
          const isCompleted = currentStep > step.id
          const isPending = currentStep < step.id

          return (
            <div key={step.id} className="flex items-center">
              {/* Step Circle */}
              <div className={`progress-step shadow-glow ${
                isActive ? 'active' : 
                isCompleted ? 'completed' : 'pending'
              }`}>
                {isCompleted ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span className="text-sm font-medium">{step.id}</span>
                )}
              </div>
              
              {/* Step Title */}
              <span className={`ml-2 text-sm font-medium ${
                isActive ? 'text-primary-600' : 
                isCompleted ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step.title} {isActive ? '✨' : isCompleted ? '✅' : '🫧'}
              </span>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-4 ${
                  isCompleted ? 'bg-primary-600' : 'bg-gray-300'
                }`} />
              )}
            </div>
          )
        })}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div className="h-2 w-full bg-gradient-to-r from-primary-500 via-indigo-500 to-purple-500" style={{ transform: `translateX(-${100 - progressPercent}%)`, transition: 'transform 500ms ease-out' }} />
      </div>
      
      {/* Step Counter */}
      <div className="text-center mt-2">
        <span className="text-sm text-gray-600">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
    </div>
  )
}

export default ProgressBar
