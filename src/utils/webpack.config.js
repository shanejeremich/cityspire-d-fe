const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', //production
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  //loaders

  //plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cityspire',
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
};
