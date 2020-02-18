const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('src/'),
        '@api': path.resolve('src/api/'),
        '@scss': path.resolve('src/assets/scss/'),
        '@comp': path.resolve('src/components/'),
        '@const': path.resolve('src/constants/'),
        '@mixins': path.resolve('src/components/mixins/'),
        '@pages': path.resolve('src/components/pages/'),
        '@store': path.resolve('src/store/')
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
