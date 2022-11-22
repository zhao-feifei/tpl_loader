const {
  resolve
} = require('path');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/app.js'),
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'app.js',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.tpl$/,
      use: [
        'babel-loader',
        path.resolve(__dirname, './loaders/tpl-loader.js')
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html')
    })
  ],
  devServer: {
    port: 3333
  }
}