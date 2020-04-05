module.exports = {
    mode: 'development',
    entry: './src/main.js', //Arquivo principal
    output: { //Lugar e arquivo para enviar o código convertido
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
}