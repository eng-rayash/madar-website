import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#bb925b',
          light: '#d4a865',
          dark: '#9a7645',
          50: '#fdf8f1',
          100: '#f9eddb',
          200: '#f2d9b5',
          300: '#e8c08a',
          400: '#d4a865',
          500: '#bb925b',
          600: '#9a7645',
          700: '#7d5e36',
          800: '#584b3e',
          900: '#3d3028',
        },
        brown: {
          DEFAULT: '#584b3e',
          light: '#7d6b5a',
          dark: '#3d3028',
        },
        olive: {
          DEFAULT: '#3d4a35',
          light: '#4f6044',
          dark: '#2d3828',
          footer: '#3a4a35',
        },
        cream: {
          DEFAULT: '#faf7f4',
          dark: '#f5f0eb',
          darker: '#ede8e1',
        },
        charcoal: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          medium: '#4a4a4a',
        },
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        ge: ['"GE SS TV"', 'Cairo', 'sans-serif'],
        shahd: ['"Shahd Font"', 'Cairo', 'sans-serif'],
        btitr: ['"B Titr"', 'Cairo', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #bb925b 0%, #d4a865 100%)',
        'dark-gradient': 'linear-gradient(135deg, #3a4a35 0%, #4f6044 100%)',
        'cream-gradient': 'linear-gradient(180deg, #faf7f4 0%, #f5f0eb 100%)',
        'hero-overlay': 'linear-gradient(to bottom, rgba(90,70,45,0.55) 0%, rgba(40,35,25,0.75) 100%)',
      },
      boxShadow: {
        'card': '0 2px 20px rgba(90, 70, 45, 0.08)',
        'card-hover': '0 8px 40px rgba(90, 70, 45, 0.16)',
        'gold': '0 4px 24px rgba(187, 146, 91, 0.3)',
        'gold-sm': '0 2px 12px rgba(187, 146, 91, 0.2)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      screens: {
        xs: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

export default config
