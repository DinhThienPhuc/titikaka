/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/6580b17f35510ffc21541053_gradient-noise-green-red.png')",
        "footer-img":
          "url('https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/6679d424b15ec493e1500f69_gradient-noise-purple-azure-dark.jpg')",
      },
      boxShadow: {
        "card-1":
          "0 4px 10px rgba(0, 0, 0, 0.04), 0 1px 4px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.02)",
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
