/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/template.html"],
  theme: {
    container: {
      center: true,    // Tailwind’s container does not center itself automatically and does not have any built-in horizontal padding. This will center the container by default
    },
    extend: {
      colors: {
        accent: "#333333",
        primaryBlack: "#000000",
        customRed: "#F40000",
        customOrangeDark: "#FF560E",
        customGreen: "#6ACE7F",
        customBlue: "#6AC9CE",
        customSoil: "#D7B85B",
        customOrangeLight: "#F79900",
        customGrey: "#B59E74",
      },
      screens: {
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          maxWidth: '1200px',
          paddingRight: '24px',
          paddingLeft: '24px',
          // '@screen sm': {
          //   paddingRight: '16px',
          //   paddingLeft: '16px',
          // },
        },
      });
    },
  ],
}