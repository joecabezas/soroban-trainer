const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new Dotenv({path: './.env'}),
  ],
});
