/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#cc5b0e',
        'yellow': '#e7aa14',
        'brown': '#69320c',
        'tan': '#715920',
        'cave': '#38311f'
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        'vt323': ['VT323', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    }
  },
  plugins: [],
}
