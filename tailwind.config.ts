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
        accent: "#00C9A7",
        "accent-dark": "#00A388",
        "accent-light": "#4DFFDB",
        s1: "#0a0a0a",
        s2: "#0f1923",
        s3: "#111827",
        s4: "#0c1a14",
        border: "#1e2a2a",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
