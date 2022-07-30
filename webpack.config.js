const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        // test: /web.test.js$/,
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: "Output",
      myPageHeader: "Page Header",
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    static: "./dist"
  }
  // resolve: {
  //   fallback: {
  //     os: require.resolve("os-browserify/browser"),
  //     path: require.resolve("path-browserify")
  //   }
  // }
};