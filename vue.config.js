const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src/'),
        '@scss': path.resolve('src/assets/scss/'),
        '@utils': path.resolve('src/utils/')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@scss/_variables";
          @import "@scss/_mixin";
        `
      }
    }
  }
}
