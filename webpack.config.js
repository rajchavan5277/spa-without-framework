const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/app',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[contenthash:8].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@': path.resolve(__dirname, 'src')
    },
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ],
    extensions: ['.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Setting up webpack',
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
    })
  ]

}