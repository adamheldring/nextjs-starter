const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === "development"
    ? {}
    : !process.env.NOW_REGION
    ? require("next/constants")
    : require("next-server/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {};
  }

  const withCSS = require("@zeit/next-css");
  const withSass = require("@zeit/next-sass");
  const withTypescript = require("@zeit/next-typescript");

  return withTypescript(withSass(withCSS()));
};
