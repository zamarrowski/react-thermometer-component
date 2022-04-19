'use strict'
let webpack = require('webpack')
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

let config = {
  mode: "production",
  entry: './src/index.js',
  output: {
    path: path.resolve('./lib/'),
    filename: 'index.js'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        cache: true,
        parallel: true,
        sourceMap: true,
        extractComments: false,
        terserOptions: {
          format: {
            comments: false
          }
        }
      })
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}

module.exports = config
