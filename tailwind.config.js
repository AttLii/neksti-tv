/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mode7: ["var(--mode7)"],
      },
    },
  },
  plugins: [],
};
