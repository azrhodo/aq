
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['f5PxZU8mRRsadcf3kM8ULd'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  