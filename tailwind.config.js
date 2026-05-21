/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Blue
        secondary: "#1e293b", // Slate 800
        dark: "#0f172a", // Slate 900
        light: "#f8fafc", // Slate 50
        accent: "#10b981", // Emerald 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
