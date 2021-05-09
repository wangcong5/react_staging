const proxy = require('http-proxy-middleware')
module.exports = function(app) {
    app.use(
        proxy('/api1', {
            target: 'https://www.layui.com',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' }
        }),
        proxy('/api3', {
            target: 'https://api.github.com/',
            changeOrigin: true,
            pathRewrite: { '^/api3': '' }
        })
    )
}