import React, { useEffect, useRef } from 'react'

const SuccessStep = ({ onReset }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    // lightweight confetti using canvas
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrame
    const particles = Array.from({ length: 120 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * 200,
      r: 4 + Math.random() * 4,
      c: `hsl(${Math.random() * 360}, 80%, 60%)`,
      s: 1 + Math.random() * 2,
      a: Math.random() * Math.PI * 2,
      av: 0.02 + Math.random() * 0.03
    }))

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = 300
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.y += p.s
        p.x += Math.sin(p.a) * 1.2
        p.a += p.av
        if (p.y - p.r > canvas.height) {
          p.y = -20
          p.x = Math.random() * canvas.width
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.c
        ctx.fill()
      })
      animationFrame = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
    }
  }, [])
  return (
    <div className="animate-fade-in text-center">
      {/* Confetti Canvas */}
      <canvas ref={canvasRef} className="w-full h-[180px] mb-2" style={{ display: 'block' }} />

      {/* Success Icon */}
      <div className="mb-6">
        <div className="mx-auto w-20 h-20 bg-success-100 rounded-full flex items-center justify-center animate-bounce-soft">
          <svg className="w-10 h-10 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      {/* Success Message */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Registration Successful! 🎉
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Thank you for completing the registration form. Your account has been created successfully.
        </p>
        <p className="text-gray-500">
          We've sent a confirmation email to your inbox. Please check your email to verify your account.
        </p>
      </div>

      {/* Next Steps */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Next?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-primary-600 font-bold">1</span>
            </div>
            <span className="text-gray-700">Verify your email address</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-primary-600 font-bold">2</span>
            </div>
            <span className="text-gray-700">Complete your profile</span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-primary-600 font-bold">3</span>
            </div>
            <span className="text-gray-700">Start exploring our platform</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <button
          onClick={onReset}
          className="btn-primary"
        >
          <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Start Over
        </button>
        
        <p className="text-sm text-gray-500">
          Need help? Contact our support team at{' '}
          <a href="mailto:support@example.com" className="text-primary-600 hover:underline">
            support@example.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default SuccessStep
