/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#eef0ff',
          100: '#dde1ff',
          200: '#b8bdff',
          300: '#8a8ff7',
          400: '#6366f1',
          500: '#4338ca',
          600: '#2e1f8a',
          700: '#1e1650',
          800: '#151040',
          900: '#0f0c2e',
          950: '#0b0822',
        },
        accent: {
          50: '#fff0f3',
          100: '#ffe2e9',
          200: '#ffc9d6',
          300: '#ff9db5',
          400: '#ff6690',
          500: '#e91e63',
          600: '#d81557',
          700: '#b80d48',
          800: '#9b0f43',
          900: '#84103e',
          950: '#4a031e',
        },
      },
    },
  },
  plugins: [],
}
