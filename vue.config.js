module.exports = {
    productionSourceMap: false,
    // 关闭eslint
    lintOnSave: false,
    // 代理跨域
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
                // 因为我们所有的请求路径都有/api，所以这里不需要重写路径
                // pathRewrite: {
                //     '^/api': ''
                // },
            },
        },
    },
}