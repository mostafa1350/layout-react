/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  // ============== Start Theme ====================
  theme: {
    extend: {
      backgroundImage: {
        'mirodposht': "url('../public/images/Mirodposht.jpg')",
        'mirodposhtDark': "url('../public/images/Mirodposht-dark.jpg')"
    },
   }
  },
  // =============   End theme ==================

  plugins: [],
}