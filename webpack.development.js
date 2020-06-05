const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    contentBase: ['./src'],
  },
  plugins: [
    new Dotenv({path: './.env'}),
    new HtmlWebpackPlugin({
      title: 'DEV',
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'app',
      scripts: ['main.js'],
    }),
  ],
});
