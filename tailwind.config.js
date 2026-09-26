/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#d2e823",
          "lime-hover": "#dff15c",
          "lime-subtle": "#f3fbc9",
          "lime-cream": "#fbfde9",
          "lime-dark": "#a5b00f",
          dark: "#0a0a0a",
          black: "#000000",
          card: "#111418",
          "card-dark": "#141416",
          zinc: "#09090b",
          gray: "#737373",
          "gray-light": "#a1a1aa",
          border: "rgba(255, 255, 255, 0.08)",
          "border-light": "rgba(0, 0, 0, 0.08)",
          bg: "#fbfde9",
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', "sans-serif"],
        body: ["Inter", '"Open Sauce One"', "sans-serif"],
        mono: ['"Fragment Mono"', "monospace"],
      },
      animation: {
        "spin-very-slow": "spin 50s linear infinite",
        marquee: "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
