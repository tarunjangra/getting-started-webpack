var webpack = require('webpack');

module.exports = {
  entry: './dist/app.js',
  output: {
    path:  'build',
    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 3000
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
  }
}
