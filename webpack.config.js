var path = require('path');
var webpack = require('webpack');

const config = {
  entry: {
    app: [
      './src/index.ts'
    ],
  },

  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader'
      },
    ]
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json']
  },
  devtool:  'eval',
  devServer: {
    progress: true,
    //hot: true,
    inline: true,
    publicPath: 'build/',
    historyApiFallback: true,
    contentBase: './src'
  }
};

module.exports = config;
