var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  'faker',
  'lodash',
  'redux',
  'react-redux',
  'react',
  'react-dom',
  'react-input-range',
  'redux-form',
  'react-router',
  'redux-thunk',
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/,
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // This is removing the same files that presents in bundle.js and vendor.js -> make to present only in vendor.js
      // name: 'vendor',
      names: ['vendor', 'manifest'],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
