/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1130px", // SENİN MAX WIDTH
    },
    extend: {
      fontFamily: {
        jakarta: ["var(--font-plus-jakarta)", "sans-serif"],
        dancing: ["var(--font-dancing-script)", "cursive"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
         inter: ["var(--font-inter)"],
      },


      keyframes: {
        'toast-slide': {
          '0%': { opacity: '0', transform: 'translateY(-10px) translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0) translateX(0)' },
        },
        'gentle-pop': {
          '0%': { transform: 'scale(0.95)' },
          '60%': { transform: 'scale(1.03)' },
          '100%': { transform: 'scale(1)' },
        }
      },
      animation: {
        'toast': 'toast-slide 0.25s ease-out',
        'pop': 'gentle-pop 0.9s ease-out forwards',
      }
    },
  },
plugins: [require("@tailwindcss/typography")],



};
