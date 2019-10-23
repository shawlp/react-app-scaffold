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
  addPostcssPlugins([require("postcss-px2rem")({ rootValue: 100, propList: ['*'] })]),
  rewireAliases.aliasesOptions({
    '@api': path.resolve(__dirname, `${paths.appSrc}/api/`),
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
    '@routes': path.resolve(__dirname, `${paths.appSrc}/routes/`),
    '@store': path.resolve(__dirname, `${paths.appSrc}/store/`),
    '@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
    '@pages': path.resolve(__dirname, `${paths.appSrc}/pages/`),
    '@common': path.resolve(__dirname, `${paths.appSrc}/common/`)
  })
);