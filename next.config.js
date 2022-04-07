const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const getEnvConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      APOLLO_API: "https://api3.myperfectfit.co.in:5679/graphql",
    };
  }
  return {
    APOLLO_API: "https://api3.myperfectfit.co.in:5679/graphql",
  };
};
module.exports = (phase) => {
  const envConfig = getEnvConfig(phase);
  return {
    i18: {
      locales: ["en", "fr"],
      defaultLocale: "en",
    },
    env: envConfig,
  };
};
