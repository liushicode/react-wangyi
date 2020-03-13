const { override, fixBabelImports, addLessLoader, addPostcssPlugins, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra');

module.exports = override(
  // 按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true,
  }),
  // 自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#dd1a21' },
  }),
  // 移动端适配
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 37.5,
    propList: ['*']
  }),]),
  // ES7装饰器语法兼容
  addDecoratorsLegacy(),
  // 配置路径别名
  addWebpackAlias({})
);