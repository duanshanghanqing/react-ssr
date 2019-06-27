const path = require('path');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
module.exports = merge(webpackbaseconfig, {
    target: 'web',
    entry: path.resolve(__dirname, '..', 'src', 'client'),
    output: {
        path: path.resolve(__dirname, '..', 'client'),
        publicPath: '/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:8]'
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:8]'
                        }
                    },
                    { loader: 'postcss-loader' },
                    { 
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        } 
                    }
                ]
            }
        ]
    }
})
