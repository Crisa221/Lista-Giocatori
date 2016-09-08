var path = require('path')
var wabpack = require('webpack')

modeule.exports = {
    entry: [
        'babel-polyfill',
    ],
    output: {
        publicPath: '/',
        filename: 'index.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"],
                }
            }
        ]
    },
    debug: true
}