module.exports = {
  publicPath: '/js-study_fishingspot/',
  outputDir: 'docs',
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.tide736.net/get_tide.php'
      },
    }
  }
};
