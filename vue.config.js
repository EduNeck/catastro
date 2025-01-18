const webpack = require('webpack');

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  devServer: {
    port: 3000 // Cambia 3000 al puerto que desees usar
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        '__VUE_OPTIONS_API__': JSON.stringify(true),
        '__VUE_PROD_DEVTOOLS__': JSON.stringify(false),
        '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
      })
    ]
  },

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/catastro/'  // Cambia 'tu-repositorio' por el nombre real de tu repositorio
    : '/'
};