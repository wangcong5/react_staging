// 按需引入
// 配置具体的修改规则

const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        // modifyVars: { '@primary-color': '#1DA57A' }
        modifyVars: { '@primary-color': 'DeepSkyBlue' }
    }),
);