import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFEF9',
          100: '#F5F3EB',
          200: '#E8E6DC',
          300: '#D4D1C7',
        },
        slate: {
          primary: '#191918',
          secondary: '#6B6B69',
        },
        accent: {
          DEFAULT: '#D97757',
          hover: '#C4613E',
          light: '#E8A48D',
        },
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
