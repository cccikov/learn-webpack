const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
/*
 * clean-webpack-plugin 的用法变了，和webpack官方demo已经不一致了
 * https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
 */

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management 管理输出'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};