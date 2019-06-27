const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals');


module.exports = merge(webpackbaseconfig, {
    mode: 'development',
    target: 'node',
    entry: path.resolve(__dirname, '..', 'src', 'server'),
    output: {
        path: path.resolve(__dirname, '..', 'server'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'isomorphic-style-loader',
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'isomorphic-style-loader',
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
