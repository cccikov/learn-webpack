const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    mode: "development",
    entry: [
        "./src/index.js",
        "webpack-hot-middleware/client"
    ],
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack热替换'
        }),
        new webpack.HotModuleReplacementPlugin(), // 必要的，热替换模块
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
};