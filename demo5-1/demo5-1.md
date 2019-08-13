# demo5-1

[模块热替换](https://www.webpackjs.com/guides/hot-module-replacement/)

[模块热替换 原版](https://webpack.js.org/guides/hot-module-replacement/)

热替换：利用 webpack 的用于开发的服务器 webpack-dev-server

``` bash
    npm start
```

### 修改 webpack-dev-server 配置

要注意和 *demo4-1* 例子的区别，demo4-1是有改动的时候刷新页面来响应代码的变化；模块热替换是不会刷新页面的来响应代码变化的。

``` diff
    devServer: {
      contentBase: './dist',
+     hot: true
    },
```

如果不配置devServer，可以通过启动服务的时候加上`--hotOnly`来开启模块热替换（虽然和hot:true有点区别）

``` bash
    webpack-dev-server --hotOnly
```

启动服务后，修改print.js查看控制台变化

webpack-dev-server 相关配置

``` javascript
devServer: {
    contentBase: './dist',
    hot: true, // 开启模块热替换，但是有些时候构建错误会采用刷新页面
    hotOnly: true // 开启模块热替换，但是构建错误时不会采用刷新页面作为后备方案，
},
```

hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败

在 *demo5-1* 例子中，如果采用的是hot模式， 修改 `print.js` 会热替换， 修改 `index.js` 会刷新页面；如果采用的是hot模式， 修改 `print.js` 会热替换， 修改 `index.js` 没有任何反应


## plugins

在 https://www.webpackjs.com/ 的指南中，热替换是需要添加下面两个插件的，但是英文官网是不需要的。

``` diff
+  new webpack.NamedModulesPlugin(),
+  new webpack.HotModuleReplacementPlugin()
```

HotModuleReplacementPlugin 是一个热替换模块。应该是新版的 webpack-dev-server 已经自带了吧。如果已经通过 HotModuleReplacementPlugin 启用了模块热替换(Hot Module Replacement)，则它的接口将被暴露在 module.hot 属性下面。

NamedModulesPlugin 当开启 HMR 的时候使用该插件会显示模块的相对路径。就是在浏览器控制台

```
[HMR] Updated modules:
[HMR]  - ./src/print.js
[HMR] App is up to date.
```
