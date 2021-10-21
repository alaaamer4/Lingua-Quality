const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins([optimizedImages], {
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
  target: "serverless",
});
