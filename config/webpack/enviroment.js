const { webpackConfig } = require('@rails/webpacker')

webpackConfig.plugins = webpackConfig.plugins.filter(conf => {
  if (conf.options) {
    return conf.options.filename !== "[path].br[query]";
  } else {
    return conf;
  };
});

module.exports = webpackConfig
