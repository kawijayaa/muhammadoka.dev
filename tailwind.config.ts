import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "20%": { transform: "translate(0, -50px) scale(1.2)" },
          "40%": { transform: "translate(20px, -200px) scale(1.6)" },
          "60%": { transform: "translate(80px, 120px) scale(0.8)" },
          "80%": { transform: "translate(-30px, 20px) scale(1.2)" },
          "100%": { transform: "translate(0, 0) scale(1)" },
        },
      },
      animation: {
        blob: "blob 12s infinite",
      },
    },
  },
  plugins: [],
};
export default config;
