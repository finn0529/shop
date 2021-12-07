module.exports = {
  publicPath: './',
  // 修改 webpack 設定，改 title
  chainWebpack (config) {
    config.plugin('html').tap(args => {
      args[0].title = '校園社團介紹網'
      return args
    })
  }
}
