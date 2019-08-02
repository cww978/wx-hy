const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: true,
  // 是否生成 sourceMap
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))

    config.module.rules.delete('svg')
    config.module
      .rule('svg-sprite-loader')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    // 修复HMR
    config.resolve.symlinks(true)
  },
  devServer: {
    https: false,
    port: 8080,
    proxy: {
      // 前端开发环境，测试数据
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: path => {
          let p = path.replace(/^\/api/, '')
          if (p.indexOf('?') >= 0) {
            return p.replace('?', '.json?')
          } else {
            return p + '.json'
          }
        }
      }
      // 与后端同学联调，用下面一段：
      // '/api': {
      //   target: 'http://localhost:11818/marketAnalyse',
      //   changeOrigin: true,
      //   pathRewrite: (path, req) => {
      //     let p = path.replace(/^\/api/, '')
      //     return p
      //   }
      // }
    }
  }
}
