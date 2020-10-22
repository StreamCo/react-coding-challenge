// const HtmlWebpackPlugin = require('html-webpack-plugin'); // @TODO still debug why its not working for my local
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const copyHTMLFiles = new CopyWebpackPlugin({patterns: [
  {
    from: './src/index.html',
    to: "./"
  }
]});

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./src"),
    open: true,
    port: 9104
  },
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            }
          }
        ]
      },
    ]
  },
  plugins: [
    copyHTMLFiles,
    // new HtmlWebpackPlugin()
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
};
