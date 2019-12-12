const {isNil, castArray} = require('lodash');

module.exports = ({assets, message, tagOnly}) => ({
  assets: isNil(assets)
    ? ['CHANGELOG.md', 'package.json', 'package-lock.json', 'npm-shrinkwrap.json']
    : assets
    ? castArray(assets)
    : assets,
  message,
  tagOnly: isNil(tagOnly) ? false : tagOnly,
});
