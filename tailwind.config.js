module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './component/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px" ,
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover','responsive', 'hover', 'focus'],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
