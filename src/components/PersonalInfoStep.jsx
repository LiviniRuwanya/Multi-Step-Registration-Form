import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

const PersonalInfoStep = ({ onNext }) => {
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useFormContext()

  const passwordValue = watch('password', '')

  const passwordStrength = useMemo(() => {
    const value = passwordValue || ''
    let score = 0
    if (value.length >= 8) score += 1
    if (/[A-Z]/.test(value)) score += 1
    if (/[a-z]/.test(value)) score += 1
    if (/\d/.test(value)) score += 1
    if (/[^A-Za-z0-9]/.test(value)) score += 1
    const levels = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong']
    return { score, label: levels[Math.max(0, score - 1)] || 'Very weak' }
  }, [passwordValue])

  const onSubmit = (data) => {
    onNext()
  }

  return (
    <div className="animate-slide-in">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 animate-wiggle">Personal Information 🧸</h2>
        <p className="text-gray-600">Please provide your basic information to get started.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              {...register('firstName')}
              className={`form-input ${errors.firstName ? 'error' : ''}`}
              style={{ boxShadow: '0 6px 24px rgba(59,130,246,0.06)' }}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-error-600">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              {...register('lastName')}
              className={`form-input ${errors.lastName ? 'error' : ''}`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-error-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className={`form-input ${errors.email ? 'error' : ''}`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-error-600">{errors.email.message}</p>
          )}
        </div>

        {/* Password Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="password" className="form-label">
              Password *
            </label>
            <input
              type="password"
              id="password"
              {...register('password')}
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-error-600">{errors.password.message}</p>
            )}
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-500">Strength</span>
                <span className={`text-xs font-medium ${
                  passwordStrength.score >= 4 ? 'text-green-600' : passwordStrength.score >= 3 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {passwordStrength.label}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`${
                    passwordStrength.score >= 4
                      ? 'bg-green-500'
                      : passwordStrength.score >= 3
                      ? 'bg-yellow-500'
                      : 'bg-red-500'
                  } h-2 transition-all duration-300`}
                  style={{ width: `${(passwordStrength.score / 5) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-[11px] text-gray-500">
                Use at least 8 characters, including upper/lowercase, numbers, and symbols.
              </p>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password *
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
              className={`form-input ${errors.confirmPassword ? 'error' : ''}`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-error-600">{errors.confirmPassword.message}</p>
            )}
          </div>
        </div>

        {/* Gender Field */}
        <div>
          <label className="form-label">Gender *</label>
          <div className="space-y-2">
            {['Male', 'Female', 'Other', 'Prefer not to say'].map((gender) => (
              <label key={gender} className="flex items-center">
                <input
                  type="radio"
                  value={gender}
                  {...register('gender')}
                  className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                />
                <span className="ml-2 text-gray-700">{gender}</span>
              </label>
            ))}
          </div>
          {errors.gender && (
            <p className="mt-1 text-sm text-error-600">{errors.gender.message}</p>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-end pt-6">
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

export default PersonalInfoStep
