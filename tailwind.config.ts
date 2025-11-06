import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef9ff",
          100: "#d8efff",
          200: "#b0e0ff",
          300: "#78c7ff",
          400: "#3ca8ff",
          500: "#1487f0",
          600: "#0066cf",
          700: "#0050a4",
          800: "#023d7c",
          900: "#043466"
        }
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
