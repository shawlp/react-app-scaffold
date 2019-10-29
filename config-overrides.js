const { override, fixBabelImports, addPostcssPlugins, addLessLoader, addDecoratorsLegacy, disableEsLint, addBabelPlugins, watchAll, addWebpackAlias, addWebpackPlugin } = require('customize-cra');
const rewireAliases = require('react-app-rewire-aliases');
const { paths } = require('react-app-rewired');
// const webpack = require('webpack');
const path = require('path');

module.exports = override(
  disableEsLint(), // 禁止eslint
  // watchAll(), // yarn start --watch-all
  addWebpackAlias({'react-dom': '@hot-loader/react-dom'}),
  // addWebpackPlugin(new webpack.HotModuleReplacementPlugin()), // ???
  addDecoratorsLegacy(),
  // ...addBabelPlugins(
  //   'react-hot-loader/babel'
  // ), 
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: "[local]--[hash:base64:5]" // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
  }),
  addPostcssPlugins([require("postcss-pxtorem")({ rootValue: 100, propList: ['*'] })]),
  rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appSrc}`)
  })
);