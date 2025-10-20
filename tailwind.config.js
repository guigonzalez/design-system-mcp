/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#fcfaf8',
        foreground: '#181818',
        primary: {
          DEFAULT: '#ef6c00',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#ffefd9',
          foreground: '#ef6c00',
        },
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#353535',
        },
        destructive: {
          DEFAULT: '#dc2626',
          foreground: '#ffffff',
        },
        success: {
          DEFAULT: '#16a34a',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#ffffff',
          foreground: '#181818',
        },
        input: '#353535',
        border: '#e7e5e4',
      },
      borderRadius: {
        lg: '8px',
        md: '6px',
        sm: '4px',
      },
      fontSize: {
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
      },
      spacing: {
        '2.5': '10px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
