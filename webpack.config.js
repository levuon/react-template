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
            },
            { test: /\.json$/, loader: "json-loader"}
        ]
    },
    resolve: {
        extensions: [
            '.json', '.js', '.jsx'
        ],
        // 引用模块可以不用绝对路径或者相对路径
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            // 'dispatcher': '/src/dispatcher',
        }
    },
    devServer: {
        host: 'localhost',
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
