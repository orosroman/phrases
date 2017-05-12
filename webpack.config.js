const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
};

console.log("process.env.NODE_ENV: ", JSON.stringify(process.env.NODE_ENV));

var config = {
  devtool: 'cheap-module-source-map',
  context: PATHS.src,
  entry: {
    app: './index.jsx'
  },
  output: {
    path: PATHS.build,
    filename: '[hash:8].bundle.js'
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true
  },
  module: {
    loaders : [
      {
        test : /\.jsx?$/,
        include : PATHS.app,
        use: [{
          loader: 'babel-loader',
          options: { presets: ["es2015", "react", "stage-0"] }
        }],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ],
};

if (process.env.NODE_ENV === "production") {
  config.devtool = ''
}

module.exports = config;