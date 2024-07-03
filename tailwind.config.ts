import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "z-blue": "#2167ae",
        "dark-blue": "#23366f",
        "mid-blue": "#5495cf",
        "light-blue": "#91bfe3",
        "sky-blue": "#1fb1e6",
        "sand-stone": "#dad2bd",
        dove: "#dde4e3",
        "z-white": "#eceeef",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
