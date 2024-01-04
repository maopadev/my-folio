/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,md,mdx,ts,tsx}"],
  enabled: process.env.NODE_ENV === "production",
  safeList: [],
  darkMode: "class",
  theme: {
    fontFamily: {
      "roxborough-medium": ["Roxborough Medium", "sans-serif"],
      "roxborough-bold": ["Roxborough Bold", "sans-serif"],
      bricolage: ["Bricolage Grotesque", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#0d0d0d",
        secondary: "#f2f2f2",
        "accent-one": "#A5FFC9",
        "accent-two": "#FCFABC",
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        marquee2: 'marquee2 30s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    },
  },
  plugins: [],
};
