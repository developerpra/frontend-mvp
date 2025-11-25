/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@progress/kendo-react-*/**/*.{js,jsx}",
  ],
  safelist: ["bg-primary", "text-primary", "border-primary"],
  theme: {
    extend: {
      colors: {
        primary: "#172e50",
        onPrimary: "#ffffff",
        kendo: {
          primary: "#172e50",
          onPrimary: "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
