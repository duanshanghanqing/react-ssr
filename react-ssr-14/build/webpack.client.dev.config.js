const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');

module.exports = merge(webpackbaseconfig, {
    mode: 'development',
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
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
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
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ENV: '"development"'
            }
        })
    ]
})
