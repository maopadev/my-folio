/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,md,mdx,ts,tsx}"],
  enabled: process.env.NODE_ENV === "production",
  darkMode: "class",
  safeList: [],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "sans-serif"],
      bricolage: ["Bricolage Grotesque", "sans-serif"],
    },
    extend: {
      colors: {
        dark: "#080808",
        light: "#f3f0ed",
        thunder: "#FEC400",
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
