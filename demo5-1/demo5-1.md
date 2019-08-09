# demo5-1

[模块热替换](https://www.webpackjs.com/guides/hot-module-replacement/)

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