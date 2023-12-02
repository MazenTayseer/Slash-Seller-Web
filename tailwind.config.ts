import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"], 
      },
      boxShadow: {
        custom:
          "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
      },
      colors: {
        customLime: "#bbef33",
        customGray: "#585858",
        customWhite: "#f5f5f5",
        customMain: "#0c0c0c",
        customDark: "#1d1d1f",
      },
    },
  },
  plugins: [],
};
export default config;
