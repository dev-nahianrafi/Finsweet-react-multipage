/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'container': '1280px',
        'h1Width' : '582px'
      },
    },fontFamily: {
      'popiens': ["Poppins", 'sans-serif'],
    },colors: {
      'main': '#1C1E53',
      'sada': '#fff',
      'borderColor' : '#F4F6FC',
      'kalo' : '#1B1C2B',
      'headingcolor': '#282938',
      'background' : '#F4F6FC',
      'ac' : '#2405F2'
    },borderRadius: {
      'br': '41px',
    }
  },
  plugins: [],
}

