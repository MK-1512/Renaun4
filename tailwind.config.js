export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: "#d2e823",
          "lime-hover": "#dff15c",
          "lime-subtle": "#f3fbc9",
          "lime-cream": "#08090a",
          "lime-dark": "#a5b00f",
          dark: "#08090a",
          black: "#000000",
          card: "#0e1014",
          "card-dark": "#0a0b0e",
          zinc: "#09090b",
          gray: "#737373",
          "gray-light": "#a1a1aa",
          border: "rgba(255, 255, 255, 0.08)",
          "border-light": "rgba(255, 255, 255, 0.08)",
          bg: "#08090a",
        },
      },
      fontFamily: {
        heading: ['"Original Surfer"', "cursive", "sans-serif"],
        body: ['"Original Surfer"', "cursive", "sans-serif"],
        mono: ['"Original Surfer"', "cursive", "monospace"],
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
