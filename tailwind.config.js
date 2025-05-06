const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Add this if using src folder
    "node_modules/@heroui/react/**/*.{js,ts,jsx,tsx}", // Ensure HeroUI styles are included
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" // Add NextUI components
  ],
  darkMode: "class",
  theme: {
    // rest of the code
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
    nextui() // Add NextUI plugin
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}