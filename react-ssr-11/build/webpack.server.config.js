const path = require('path');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals');
module.exports = merge(webpackbaseconfig, {
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
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]_[local]_[hash:base64:8]'
                        }
                    }
                ]
            }
        ]
    }
})
