const path = require('path');
console.log(path.resolve(__dirname, 'src/assets/less/globall.less'));
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [path.resolve(__dirname, 'src/assets/less/globall.less')],
    },
    // 全局less
  },
};
