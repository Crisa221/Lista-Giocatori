
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "build", "js") ,
    filename: "bundle.js"
  },

  module: {
      loaders: [
          { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};