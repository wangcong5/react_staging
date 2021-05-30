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
        }),
        proxy('/api3', {
            target: 'http://localhost:8080/',
            changeOrigin: true,
            pathRewrite: { '^/api3': '' }
        }),
        proxy('/apij', {
            target: 'http://10.25.127.34:8080',
            // target: 'http://localhost:8080/',
            changeOrigin: true,
            pathRewrite: { '^/apij': '' }
        }),
        proxy('/apik', {
            target: 'https://randomuser.me',
            changeOrigin: true,
            pathRewrite: { '^/apik': '' }
        }),
        proxy('/jokeapi', {
            target: 'http://v.juhe.cn',
            changeOrigin: true,
            pathRewrite: { '^/jokeapi': '' }
        })
    )
}