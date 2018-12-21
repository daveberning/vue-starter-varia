module.exports = {
  baseUrl: './',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/../node_modules/css-commons/scss/includes/fonts-colors.scss"; @import "@/../node_modules/css-commons/scss/includes/breakpoints.scss";'
      }
    }
  }
}
