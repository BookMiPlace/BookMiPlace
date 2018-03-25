const extractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'public/javascript/src'),
  entry: {
    app: './index.js',
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: extractTextPlugin.extract({ 
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
        })
      }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/javascript/dist')
  },
  plugins: [
    new extractTextPlugin({filename:'./../../../public/stylesheets/dist/main.bundle.css'}),
  ],
  target: 'node' // in order to ignore built-in modules like path, fs, etc.
};
