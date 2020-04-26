/**
 * webpack默认配置文件，如果没有这个文件，会以webpack默认配置进行打包
 */
const path = require('path');

module.exports = {
    mode: "development", // production development
    entry: { // 入口文件，从这里开始打包
        main: "./src/index.js"
    },
    module: {
        rules: [{
            test: /\.png$/,
            use: {
                loader: 'file-loader'
            }
        }] // 打包规则
    },
    output: { // 打包文件输出目录
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}