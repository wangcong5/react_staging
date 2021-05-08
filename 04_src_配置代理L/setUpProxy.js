const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        proxy('/api1', {
            target: 'https://www.layui.com',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
        }),
        proxy('/api2', {
            target: 'http://api.map.baidu.com',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' }
        })
    )
}