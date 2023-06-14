/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'NHL-logo': "url('../src/images/logos/NHL_logo.png')",
        'NBA-logo': "url('../src/images/logos/NBA_logo.png')",
        'PGA-logo': "url('../src/images/logos/PGA_logo.png')"
      }
    },
  },
  plugins: [],
}

