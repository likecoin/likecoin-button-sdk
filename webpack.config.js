const path = require('path');

const commonConfig = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};

module.exports = [
  {
    ...commonConfig,
    entry: {
      web: './src/web.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist', 'web', 'v1'),
      filename: 'sdk.js',
    },
  },
  {
    ...commonConfig,
    entry: {
      sdk: './src/sdk.esm.js',
    },
    output: {
      globalObject: 'this', // mitigate window is undefined
      path: path.resolve(__dirname, 'dist'),
      filename: 'likecoin-button.js',
      library: {
        root: 'LikeCoinButton',
        amd: 'likecoin-button',
        commonjs: 'likecoin-button',
      },
      libraryTarget: 'umd',
      libraryExport: 'default',
    },
  },
];
