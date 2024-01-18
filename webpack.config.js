const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      inject: 'body'
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
         test: /\.js$/ ,
         exclude: /node_modules/,
         use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: { 
    port: 3000,
  },
  mode: 'development'
}; 