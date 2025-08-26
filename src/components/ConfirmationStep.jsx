import React from 'react'

const ConfirmationStep = ({ formData, onPrev, onSubmit }) => {
  const formatContactMethod = (method) => {
    const methods = {
      email: 'Email',
      phone: 'Phone',
      sms: 'SMS'
    }
    return methods[method] || method
  }

  const formatInterests = (interests) => {
    if (!interests || interests.length === 0) return 'None selected'
    return interests.join(', ')
  }

  return (
    <div className="animate-slide-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-wiggle">Review Your Information 🎉</h2>
        <p className="text-gray-600">Please review all the information before submitting.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-500">First Name</span>
              <p className="text-gray-900">{formData.firstName || 'Not provided'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Last Name</span>
              <p className="text-gray-900">{formData.lastName || 'Not provided'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Email</span>
              <p className="text-gray-900">{formData.email || 'Not provided'}</p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Gender</span>
              <p className="text-gray-900">{formData.gender || 'Not provided'}</p>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Preferences
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm font-medium text-gray-500">Newsletter Subscription</span>
              <p className="text-gray-900">
                {formData.newsletter ? (
                  <span className="text-success-600 font-medium">✓ Subscribed</span>
                ) : (
                  <span className="text-gray-500">Not subscribed</span>
                )}
              </p>
            </div>
            <div>
              <span className="text-sm font-medium text-gray-500">Contact Method</span>
              <p className="text-gray-900">{formatContactMethod(formData.contactMethod) || 'Not selected'}</p>
            </div>
            <div className="md:col-span-2">
              <span className="text-sm font-medium text-gray-500">Interests</span>
              <p className="text-gray-900">{formatInterests(formData.interests)}</p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h4 className="text-sm font-medium text-blue-900">Security Notice</h4>
              <p className="text-sm text-blue-700 mt-1">
                Your password is securely stored and will not be displayed for security reasons. 
                All other information will be used to personalize your experience.
              </p>
            </div>
          </div>
        </div>
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
          type="button"
          onClick={onSubmit}
          className="btn-primary"
        >
          <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Confirm & Submit
        </button>
      </div>
    </div>
  )
}

export default ConfirmationStep
