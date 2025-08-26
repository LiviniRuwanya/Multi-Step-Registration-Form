import React from 'react'
import { useFormContext } from 'react-hook-form'

const PreferencesStep = ({ onNext, onPrev }) => {
  const { register, handleSubmit, formState: { errors, isValid } } = useFormContext()

  const interests = [
    'Technology',
    'Sports',
    'Music',
    'Travel',
    'Cooking',
    'Reading',
    'Gaming',
    'Fitness',
    'Art',
    'Photography'
  ]

  const onSubmit = (data) => {
    onNext()
  }

  return (
    <div className="animate-slide-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-wiggle">Preferences 🎈</h2>
        <p className="text-gray-600">Tell us about your preferences and interests.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Newsletter Subscription */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register('newsletter')}
              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <span className="ml-3 text-gray-700">
              Subscribe to our newsletter for updates and special offers
            </span>
          </label>
        </div>

        {/* Contact Method */}
        <div>
          <label className="form-label">Preferred Contact Method *</label>
          <div className="space-y-3">
            {[
              { value: 'email', label: 'Email', icon: '📧' },
              { value: 'phone', label: 'Phone', icon: '📱' },
              { value: 'sms', label: 'SMS', icon: '💬' }
            ].map((method) => (
              <label key={method.value} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer shadow-soft">
                <input
                  type="radio"
                  value={method.value}
                  {...register('contactMethod')}
                  className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                />
                <span className="ml-3 text-lg">{method.icon}</span>
                <span className="ml-2 text-gray-700">{method.label}</span>
              </label>
            ))}
          </div>
          {errors.contactMethod && (
            <p className="mt-1 text-sm text-error-600">{errors.contactMethod.message}</p>
          )}
        </div>

        {/* Interests */}
        <div>
          <label className="form-label">Interests (Select at least one) *</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interests.map((interest) => (
              <label key={interest} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                <input
                  type="checkbox"
                  value={interest}
                  {...register('interests')}
                  className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">{interest}</span>
              </label>
            ))}
          </div>
          {errors.interests && (
            <p className="mt-1 text-sm text-error-600">{errors.interests.message}</p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={onPrev}
            className="btn-secondary"
          >
            <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <button
            type="submit"
            className="btn-primary"
            disabled={!isValid}
          >
            Next Step
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default PreferencesStep
