
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

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
          { 
            test: /\.jsx$/, 
            loader: "babel-loader",
            query: {
              presets: ['es2015', 'react']
            } 
          },
      ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};




/* 


loaders: [
  {
    test: /\.js$,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react']
    }
  }
]

*/