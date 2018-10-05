const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    watch: true,
    target: 'electron-renderer',
    entry: './client/src/Root.js',
    output: {
        path: `${__dirname}/build`,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['react'],
                    compact: false
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                })
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|ttf|otf|eot|woff2|svg)$/i,
                loader: "file-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            disable: false,
            allChunks: true
        })
    ],
    resolve: {
      extensions: ['.js', '.json', '.jsx']
    }

}
