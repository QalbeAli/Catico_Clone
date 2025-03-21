/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acme: ["Acme", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        bounce: "bounce 3s infinite",
      },
    },
  },
  plugins: [],
};
