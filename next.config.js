const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_BUILD) {
    return {
      images: {
        domains: ['images.ctfassets.net'],
      },
    };
  }

  return {
    /* config options for all phases except development here */
    images: {
      domains: ['images.ctfassets.net'],
    },
  };
};
