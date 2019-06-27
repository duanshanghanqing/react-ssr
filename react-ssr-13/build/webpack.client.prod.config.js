const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 独立打包css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css

module.exports = merge(webpackbaseconfig, {
    mode: 'production',
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
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.less$/,
                use: [
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
