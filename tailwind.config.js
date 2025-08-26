/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
        },
        accent: {
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
        }
      },
      boxShadow: {
        glow: '0 10px 30px -10px rgba(59,130,246,0.45)',
        soft: '0 8px 24px rgba(0,0,0,0.08)'
      },
      dropShadow: {
        glow: '0 0 10px rgba(59,130,246,0.45)'
      },
      backgroundImage: {
        'radial': 'radial-gradient(1000px 500px at top left, rgba(99,102,241,0.15), transparent), radial-gradient(800px 400px at bottom right, rgba(236,72,153,0.12), transparent)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2.2s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 1.4s ease-in-out infinite',
        'wiggle': 'wiggle 0.6s ease-in-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1.5deg)' }
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 rgba(59,130,246,0)' },
          '50%': { transform: 'scale(1.01)', boxShadow: '0 0 0 6px rgba(59,130,246,0.10)' }
        }
      },
    },
  },
  plugins: [],
}
