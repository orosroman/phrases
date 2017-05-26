const path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'public')
};

var config = {
  devtool: (process.env.NODE_ENV === 'production') ? '' : 'cheap-module-source-map',
  context: PATHS.src,
  entry: {
    app: './index.jsx'
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  devServer: {
    compress: true,
    port: 9000,
    open: true,
    contentBase: PATHS.build,
    overlay: {
        errors: true,
        warnings: false,
    }
  },
  module: {
    rules : [
      {
          test: /\.jsx?$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
              emitWarning: false,
              emitError: false,
              failOnError: true,
              failOnWarning: false,
              fix: true
          },
      },
      {
        test : /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "react", "stage-0"]
        }
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          (process.env.NODE_ENV === "production") ?
            'css-loader?modules!less-loader' :
            'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]&sourceMap!less-loader'
        )
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ],
};

module.exports = config;