module.exports = {
    devtool: 'source-map',
    mode: 'development',
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
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
}
