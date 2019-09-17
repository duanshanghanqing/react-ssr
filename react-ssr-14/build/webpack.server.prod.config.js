const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 独立打包css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css

module.exports = merge(webpackbaseconfig, {
    mode: 'production',
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
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'isomorphic-style-loader',
                    { loader: MiniCssExtractPlugin.loader },
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
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'status/css/main.css',
            // chunkFilename: '[id]-[hash].css'
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: '"production"'
            }
        })
    ]
})
