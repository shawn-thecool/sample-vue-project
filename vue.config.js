const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src/'),
        '@scss': path.resolve('src/assets/scss/'),
        '@comp': path.resolve('src/components/'),
        '@mixins': path.resolve('src/components/mixins/'),
        '@pages': path.resolve('src/components/pages/')
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
