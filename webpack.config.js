const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'Src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'Public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'Public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        } 
      }, 
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  }
}