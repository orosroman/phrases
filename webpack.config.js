const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
};

var config = {
  devtool: (process.env.NODE_ENV === "production") ? '' : 'cheap-module-source-map',
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
        test: /\.min.css$/,
        loader: 'style-loader!css-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new ExtractTextPlugin({
      filename: '[hash:8].bundle.css',
      allChunks: true
    })
  ],
};

module.exports = config;

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

// const PATHS = {
//   src: path.resolve(__dirname, 'src'),
//   build: path.resolve(__dirname, 'build'),
// };

// var config = {
//   devtool: 'cheap-module-source-map',
//   context: PATHS.src,
//   entry: {
//     app: './index.jsx'
//   },
//   output: {
//     path: PATHS.build,
//     filename: '[hash:8].bundle.js'
//   },
//   devServer: {
//     compress: true,
//     port: 9000,
//     open: true
//   },
//   module: {
//     loaders : [
//       {
//         test : /\.jsx?$/,
//         include : PATHS.app,
//         use: [{
//           loader: 'babel-loader',
//           options: { presets: ["es2015", "react", "stage-0"] }
//         }],
//       },
//       {
//           test: /\.less$/,
//           loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!resolve-url!less-loader?sourceMap'})
//       },
//       {
//           test: /\.css$/,
//           loader: ExtractTextPlugin.extract({ fallback:'style-loader', use: 'css-loader'})
//       },
//     ]
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, 'public/index.html')
//     }),
//     new ExtractTextPlugin({
//       filename: 'css/[name].css',
//       allChunks: true
//     })
//   ],
// };

// if (process.env.NODE_ENV === "production") {
//   config.devtool = ''
// }

// module.exports = config;