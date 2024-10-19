/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "lbg": "#EDF2F4",
      "dbg": "#2B2D42",
      "vdbg": "#101010",
      "gray": "#8D99AE",
      "shine-red": "#EF233C",
      "light-red": "#FF5555",
      "light-orange": "#FF8855",
      "light-yelow": "#E9C13F",
    }
  },
  plugins: [],
};
