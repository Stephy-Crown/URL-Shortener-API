// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "index.js"],
  theme: {
    extend: {
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        Red: "hsl(0, 87%, 67%)",
        Gray: "hsl(0, 0%, 75%)",
        GrayishViolet: "hsl(257, 7%, 63%)",
        VeryDarkBlue: "hsl(255, 11%, 22%)",
        VeryDarkViolet: "hsl(260, 8%, 14%))",
      },

      maxWidth: {
        xl: "1440px",
        sm: "375px",
      },

      borderRadius: {
        radius: "150px",
      },

      fontFamily: {
        Poppins: ["poppins"],
        ubuntu: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
