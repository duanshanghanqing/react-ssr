const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    target: 'node',
    devtool: 'source-map',
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src'),
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            }
        ]
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}
