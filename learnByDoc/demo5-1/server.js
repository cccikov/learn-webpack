const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath // 使用 publicPath webpack配置中定义的相同内容
}));

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('端口：3000；path：为publicPath的设定值，应该是"/"');
    console.log("http://localhost:3000/\n")
});