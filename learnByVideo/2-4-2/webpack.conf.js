/**
 * webpack默认配置文件，如果没有这个文件，会以webpack默认配置进行打包
 */
const path = require('path');

module.exports = {
    entry: "./index.js", // 入口文件，从这里开始打包
    output: { // 打包文件输出目录
        filename: "bundle_not_default_config_file.js",
        path: path.resolve(__dirname, "dist")
    }
}