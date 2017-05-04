'use strict';

const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

let config = {
    devtool: 'source-map',
    entry: './src/index.js',

    output: {
        path: __dirname + '/',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: path.join(__dirname, '.', 'src')
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            }
        ]
    },
    resolve: {
        extensions: [
            '.json', '.js', '.jsx'
        ],
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            // 'dispatcher': '/src/dispatcher',
        }
    },
    devServer: {
        host: '192.168.101.88',
        historyApiFallback: true,
        hot: true,
        noInfo: false,
        publicPath: '/',
        stats: {
            cached: false,
            colors: true
        }
    }
}

module.exports = config
