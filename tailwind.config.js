/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ], theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', 'sans'],
        poppins: ['"Poppins"', 'sans'],
        lt: ['"Lato"', 'sans'],
        Mt: ['"Montserrat"', 'sans']
      },
      fontSize: {
        'lt-base': '16px',
        'lt-md': '18px',
        'lt-h6': '42px',
        'lt-h5': '46px',
        'lt-h4': '48px',
        'lt-h3': '50px',
        'lt-h2': '54px',
        'lt-h1': '56px',
        'poppins-xs': '10px',
        'poppins-sm': '12px',
        'poppins-base': '14px',
        'poppins-md': '16px',
        'poppins-lg': '20px',
        'poppins-5xl': '60px',
        'inter-md': '20px',
        'inter-base': '24px',
        'inter-lg': '32px'
      },
      colors: {
        primary: { "theme": "#FFA800" },
        secondary: { "theme": "#1B1725" },
        cream: { "theme": "#FFF9EB" },
        text: { "theme": "#616161" },
        btn: { "theme": "#444444" },
        gray: {
          "theme": "#F2F2F2",
          "2": "#444444",
          "border": "#717171"
        },
        viola: {
          "theme" : "#2F293E"
        }
      },
      boxShadow: {
        'customButtonShadow': '2px 4px 20px 0px #00000012'
      },
      gridTemplateColumns: {
        'custom': '',
      },
    },
  },
  plugins: [],
}