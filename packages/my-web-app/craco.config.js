const path = require('path');
const {getLoader, loaderByName} = require('@craco/craco');

// add package roots here
const packages = [];
packages.push(path.resolve(__dirname, '..', 'shared'));

module.exports = {
  webpack: {
    configure: (config, _arg) => {
      // get the babel-loader
      const { isFound, match } = getLoader(
        config,
        loaderByName('babel-loader')
      );

      // if we found the loader, add our packages
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        // add our packages
        match.loader.include = [...include, ...packages];
      }

      return config;
    },
  },
};