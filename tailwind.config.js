/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'rgl-red': '#C85A5A',
        'rgl-red-dark': '#B84848',
        'rgl-red-light': '#D67373',
        'rgl-charcoal': '#3A3A3A',
        'rgl-gray': '#6C757D',
        'rgl-light-gray': '#DEE2E6',
        'rgl-gold': '#F4B942',
        
        // Service Category Accent Colors (subtle variations while maintaining brand)
        'rgl-service': {
          'roofing': '#C85A5A',    // Primary red (same as brand)
          'hvac': '#CA5F5A',       // Slightly warmer red
          'moving': '#C85F65',     // Slightly pinker red
          'solar': '#C8645A',      // Slightly orange-red
          'marketing': '#B84848',  // Darker red
        },
        
        // Gradient Support Colors
        'rgl-gradient': {
          'start': '#C85A5A',
          'middle': '#B84848', 
          'end': '#A83E3E',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};