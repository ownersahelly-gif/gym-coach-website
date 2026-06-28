import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9B3FDE",
        "primary-dark": "#7B2FBE",
        "primary-light": "#C47AFF",
        surface: "#141414",
        "surface-2": "#1c1c1c",
        "surface-3": "#242424",
        border: "#2a2a2a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
