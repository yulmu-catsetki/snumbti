import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#8ACFFF",
          light: "#8ACFFF",
          dark: "#90D1FB",
        },
        secondary:{
          DEFAULT: "#998675",
          light: "#998675",
          dark: "#998675",
        }
      },
      fontFamily: {
        'bold': ['DNFBitBit', 'sans-serif'],
        'light': ['Moneygraphy', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
