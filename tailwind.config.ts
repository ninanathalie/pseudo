import type { Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        "polysans-thin": ['"PolySans-Thin"', "sans-serif"],
        "polysans-regular": ['"PolySans-Regular"', "sans-serif"],
        "polysans-bold": ['"PolySans-Bold"', "sans-serif"],
        "ppcirka-regular": ['"PPCirka-Regular"', "serif"],
        "ppcirka-bold": ['"PPCirka-Bold"', " serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`)}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" },
      );
    },
  ],
};
export default withUt(config);

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
