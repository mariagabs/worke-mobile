// Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');
const { getDefaultConfig } = require('metro-config');
module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  const { assetExts } = defaultConfig.resolver;
  return {
    resolver: {
      // Add bin to assetExts
      assetExts: [...assetExts, 'bin'],
    }
  };
})();
// module.exports = getDefaultConfig(__dirname);
