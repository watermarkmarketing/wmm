import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minHeight: {
        "30vh": "30vh",
        "60vh": "60vh",
      },
      fontSize: {
        title: "2.8rem",
        "section-title": "2.5rem",
        desc: "1.5rem",
        icon: "1.25rem",
        button: "1rem",
        copyright: "0.75rem",
      },
      lineHeight: {
        title: "3rem",
        "section-title": "2.5rem",
        desc: "1.5rem",
        icon: "1.25rem",
        button: "1rem",
        copyright: "0.75rem",
      },
      fontFamily: {
        sans: [
          '"Noto Serif Display", serif',
          {
            fontVariationSettings: '"wdth" 75',
          },
        ],
      },
      colors: {
        "wm-grey": "#4d4d50",
        "wm-lighter-grey": "#adadad",
        "wm-light-grey": "#959595",
        "wm-bg-grey": "#dfdfdf",
        "wm-footer-heading-grey": "#9c9c9c",
        "wm-footer-title-grey": "#898989",
        "wm-footer-desc-grey": "#c3c3c3",
      },
    },
  },
  plugins: [],
};
export default config;
