/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f7f3ea',
        'paper-deep': '#efe8da',
        ink: '#12131a',
        copy: '#4f5968',
        accent: '#1f7a57',
        line: '#d7cebf',
        amber: '#f2b84b',
      },
    },
  },
  plugins: [],
}
