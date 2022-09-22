module.exports = {
    //基本路径
    publicPath: './',
    // assetsPublicPath: './',
	// publicPath: '/marketing/',
    //输出文件目录
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: false,
    // build:{
    //     assetsPublicPath: './',
    // },
    //webpack-dev-server相关配置
    devServer: {
        open: true,
        //允许外部ip访问
        host: '0.0.0.0',
        //端口
        port: 8081,
        // public:'192.168.10.254:8081',
        //启用https
        // https: false,
        // hotOnly: false,
        // hot: false,
        //错误、警告在页面弹出
        // overlay: {
        //     warnings: true,
        //     errors: true
        // },
        proxy: {
            '/proxy/': {
                target: 'http://localhost:8080',
                // changeOrigin: true,
                pathRewrite: {
                    '^/proxy/': '/'
                }
            },
        
        }
    },
    //第三方插件配置
    pluginOptions: {},
   //配置加载md文件时的解析规则
   chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end()
  }
}