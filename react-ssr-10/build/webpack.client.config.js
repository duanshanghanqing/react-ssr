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
    }
})
