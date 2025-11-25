import { Courier_Prime } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: 'purple',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        Outfit: ["var(--font-outfit)", "Outfit", "sans-serif"],
        Ovo: ["var(--font-ovo)", "Ovo", "serif"],
        mono: ["Courier Prime", "monospace"],
        longCang: ["Long Cang", "cursive"],
      },
      boxShadow: {
        'black' : '2px 4px 0 #000',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
};
