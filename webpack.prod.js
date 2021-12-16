// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
    },
    plugins: [
           new HtmlWebpackPlugin({
        title: 'Production',
        template: path.resolve(__dirname, './src/public/index.html'),
        filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
    ],

};