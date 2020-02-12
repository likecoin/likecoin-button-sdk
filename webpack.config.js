const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/sdk.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sdk.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
