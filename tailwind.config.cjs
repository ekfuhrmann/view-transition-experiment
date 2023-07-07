// IMPORTANT: PostCSS Converts all `px` values to `rem`hero__svg
const pxPair = (value) => ({ [value]: `${value}px` });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,js}"],
  theme: {
    screens: {
      sm: "550px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "<sm": { max: "549.98px" },
      "<md": { max: "767.98px" },
      "<lg": { max: "1023.98px" },
      "<xl": { max: "1439.98px" },
    },
    spacing: {
      ...pxPair(0),
      ...pxPair(1),
      ...pxPair(2),
      ...pxPair(4),
      ...pxPair(6),
      ...pxPair(8),
      ...pxPair(10),
      ...pxPair(12),
      ...pxPair(14),
      ...pxPair(16),
      ...pxPair(18),
      ...pxPair(20),
      ...pxPair(21),
      ...pxPair(22),
      ...pxPair(24),
      ...pxPair(26),
      ...pxPair(28),
      ...pxPair(30),
      ...pxPair(32),
      ...pxPair(34),
      ...pxPair(36),
      ...pxPair(40),
      ...pxPair(44),
      ...pxPair(46),
      ...pxPair(48),
      ...pxPair(56),
      ...pxPair(64),
      ...pxPair(80),
      ...pxPair(96),
      ...pxPair(120),
    },
    wh: {
      ...pxPair(24),
    },
    fontFamily: {
      serif: ['"Playfair Display"', "serif"],
      sans: ['"Source Sans 3"', "sans-serif"],
    },
    extend: {
      minHeight: {
        "screen-nav": "calc(100dvh - 56px)",
      },
      boxShadow: {
        card: "inset 0 0 0 6px #000, 6px 6px #fff, 12px 12px #000",
      },
    },
  },
  plugins: [require("./config/tailwind/width-height.cjs")],
};
