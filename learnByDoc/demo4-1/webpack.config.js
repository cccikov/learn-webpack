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
    /* demo4-1新增 */
    devtool: 'inline-source-map',
    /* demo4-1新增 */
    // 如果其中一个文件被更新，代码将被重新编译，所以你不必手动运行整个构建。
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management 管理输出'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};