// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/src/public'),
        },
        compress: true,
        historyApiFallback: true,
        compress: true,
        port: 8000,
        allowedHosts: ['auto',],
        liveReload:true,
        hot: true,
        open:true,
        watchFiles: ['src/*.css',],
    },

    plugins: [
           new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve(__dirname, './src/public/index.html'),
        filename: 'index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),

    ],

};