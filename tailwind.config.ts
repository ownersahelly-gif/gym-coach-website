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
        accent: "#00E0B8",
        "accent-dark": "#00B89A",
        "accent-soft": "#9CFFEC",
        ink: "#050505",
        "ink-2": "#0b0b0d",
        "ink-3": "#101216",
        "ink-teal": "#08130f",
        line: "#1c1f24",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        mega: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;
