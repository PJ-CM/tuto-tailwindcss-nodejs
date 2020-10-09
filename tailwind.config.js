module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        danger: "#e11d74",
        info: {
          100: "#faf3dd",
          200: "#c8d5b9",
          300: "#8fc0a9",
          400: "#68b0ab",
        },
      },
    },
    fontFamily: {
      sans: ["Lemonada", "Arial", "sans-serif"],
    },
  },
  variants: {
    borderWidth: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
