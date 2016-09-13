var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  devtool: "sourcemap",
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, "build", "js") ,
    filename: "bundle.js"
  },

  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
              presets: ['es2015', 'react']
            }
          },
      ]
  }
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
