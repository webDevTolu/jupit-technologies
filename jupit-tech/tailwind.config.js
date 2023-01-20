/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xxs: "10px",
      xs: "12px",
    },
    fontFamily: {
      pop: ["Poppins"],
      inter: ["Inter"],
    },
    extend: {
      lineHeight: {
        xxs: "14px",
      },
      boxShadow: {
        mainNav: "2px 2px 24px rgba(58, 57, 94, 0.43)",
      },
      colors: {
        badge: "#CF5050",
        badgeText: "#FAFAFA",
        jupitBlue: "#1C1C93",
        primaryBlue: "#D2D2E9",
        lightBorder: "#F5F5F5",
        pump: "#0EBF7C",
        deepBlue: "#090931",
        repeat: "FFA000",
        gray: {
          80: "#424242",
          50: "#737373",
        },
        text: {
          100: "#040415",
          black: "#121212",
        },
        coins: {
          btc: "#FFEDD8",
          dollar: "#F4FFEE",
          tether: "#CCEDE4",
        },
      },
      backgroundImage: {
        cardBgImage: "url('/src/assets/images/cardImage.png')",
      },
    },
  },
  plugins: [],
};
