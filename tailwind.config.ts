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
      borderColor: {
        "red-light": "#B60005",
      },
      backgroundColor: {
        "red-light": "#B60005",
        gray: "#F1F0F0",
      },
      textColor: {
        black: "#212F3F",
        "red-light": "#B60005",
        "white-90": "#FFFFFFE5",
      },
    },
  },
  plugins: [],
};
export default config;
