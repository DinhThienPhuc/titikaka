/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/6580b17f35510ffc21541053_gradient-noise-green-red.png')",
      },
    },
    fontFamily: {
      "poly-sans-slim": ["'PolySans Slim'", "sans-serif"],
      "poly-sans-neutral": ["'PolySans Neutral'", "sans-serif"],
      "poly-sans-median": ["'PolySans Median'", "sans-serif"],
      tobias: ["Tobias", "sans-serif"],
    },
  },
  plugins: [],
};
