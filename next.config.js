// next.config.js

const path = require("path");
const withPWA = require("next-pwa");
const nextTranslate = require("next-translate");

module.exports = nextTranslate(
  withPWA({
    pwa: {
      disable: process.env.NODE_ENV === 'production',
      dest: "public",
      register: true,

      sw: "/sw.js",
    },
    sassOptions: {
      includePaths: [path.join(__dirname, "styles")],
    },
    optimizeFonts: false,
    env: {
      JWT_SECRET: "djhfghbdsgrasklkajsdgf",
      SENDGRID_KEY: "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",
      CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/lms-empty/image/upload",
      CLOUDINARY_VIDEO_URL: "https://api.cloudinary.com/v1_1/lms-empty/video/upload",
      STRIPE_SECRET_KEY: "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",
      STRIPE_PUBLISHABLE_KEY: "pk_live_51OWvQIFgKHDpomfgNwdCL517Au8V3EBr36RRilRzQlMtvhwWsHEwohfZN5nZE0CtxQaT6HOMA4amJwMrniC2ifRS00xCGhWqmZ",
    },
  })
);
