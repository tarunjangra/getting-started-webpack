var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
  entry: {
    about: './dist/aboutus',
    contact: './dist/contact',
    vendor: ['react','react-dom']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=200000'
      }
    ]
  },
  plugins: [
    new CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
}
