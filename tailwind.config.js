/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "lng": "0px 2px 10px 1px #00000060",
      },
      backgroundImage: {
        "pl-flag": "url('/resources/images/pl-flag.svg')",
        "uk-flag": "url('/resources/images/uk-flag.svg')"
      },
      screens: {
        "xs": "720px",
        "s": "850px",
        "m": "975px"
      }
    },
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
