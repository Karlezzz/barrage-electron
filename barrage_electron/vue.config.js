const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
    }
  },
  pages:{
    main:{
      entry:'./src/main.js',
      template:'./public/index.html',
      filename:'index.html',
      title:'Main Page'
    },
    remind:{
      entry:'./src/barrage.js',
      template:'./public/danmu.html',
      filename:'danmu.html',
      title:'danmu Page'
    }
  }
})