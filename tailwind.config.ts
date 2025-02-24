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
          DEFAULT: "#BFE3FC",
          light: "#D4EDFD",
          dark: "#90D1FB",
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
