/* global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const ModuleConcatenationPlugin = webpack.optimize.ModuleConcatenationPlugin;
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

let libraryName = 'library';

let plugins = [
]

let outputFile;
if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/src/' + 'index' + '.ts',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /^(?!.*\.spec\.ts$).*\.ts$/,
        loader: 'ts-loader',
      },
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: [".ts", ".js", ".json"]
  },
  plugins: plugins,
};

module.exports = config;
