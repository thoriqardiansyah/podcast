/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat Alternates", "sans-serif"],
      },
      fontSize: {
        15: "60px",
        23: "23px",
        37: "37px",
      },
      gap: {
        15: "60px",
        30: "30px",
        ten: "10px",
        six: "6px",
        90: "90px",
        25: "25px",
        120: "120px",
      },
      margin: {
        140: "140px",
        ten: "10px",
        30: "30px",
        70: "70px",
        15: "60px",
        120: "120px",
        100: "100px",
        six: "6px",
      },
      padding: {
        100: "100px",
        ten: "10px",
        15: "60px",
        six: "6px",
        three: "3px",
        30: "30px",
        140: "140px",
        120: "120px",
      },
      boxShadow: {
        buttons: "6px 6px 0 0 rgba(0, 0, 0, 0.25)",
        navbar: "3px 3px 0 0 rgba(0, 0, 0, 0.25)",
      },
      colors: {
        primary: "#F7EDE8",
        secondary: "#CD4631",
        third: "#EDF3F7",
        semiblack: "#4D4D4D",
      },
    },
  },
  plugins: [],
};
