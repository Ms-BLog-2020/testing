//模擬資料
const express = require('express')
const app = express()
var appData = require('./public/data/goodlist.json')
var seller = appData
var apiRoutes = express.Router();
app.use('/api',apiRoutes)
 
module.exports = {
  // 基本路徑
  baseUrl: '/',
  // 輸出檔案目錄
  outputDir: 'dist',
  // eslint-loader 是否在儲存的時候檢查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: true,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: () => {},
// vue-loader 配置項
// https://vue-loader.vuejs.org/en/options.html
//vueLoader: {},
// 生產環境是否生成 sourceMap 檔案
productionSourceMap: true,
  // css相關配置
  css: {
  // 是否使用css分離外掛 ExtractTextPlugin
  extract: true,
    // 開啟 CSS source maps?
    sourceMap: false,
    // css預設器配置項
    loaderOptions: {},
  // 啟用 CSS modules for all css / pre-processor files.
  modules: false
},
// use thread-loader for babel & TS in production build
// enabled by default if the machine has more than 1 cores
parallel: require('os').cpus().length > 1,
  // 是否啟用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
 
  // PWA 外掛相關配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
// webpack-dev-server 相關配置
devServer: {
//模擬資料開始
  before(app) {
    app.get('/api/seller', (req, res) => {
      res.json({
        // 這裡是你的json內容
        errno: 0,
        data: seller
      })
    })
  },
 
  open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null// 設定代理
 
},
// 第三方外掛配置
pluginOptions: {
  // ...
}
}