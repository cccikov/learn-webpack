# demo5-2

[模块热替换](https://www.webpackjs.com/guides/hot-module-replacement/)

[模块热替换 原版](https://webpack.js.org/guides/hot-module-replacement/)

### 通过 Node.js API

如果您通过Node.js API使用dev-server，devServer则将忽略选项。将选项作为第二个参数传递：`new WebpackDevServer(compiler, {...})`。

通过 Node.js API 感觉反应比直接调用webpack-dev-server慢。

NamedModulesPlugin 插件在通过node.js API启动服务的时候有用了

没加上 `new webpack.NamedModulesPlugin()` 插件前：

```
[HMR] Updated modules:
[HMR]  - 0
[HMR] Consider using the NamedModulesPlugin for module names.
[HMR] App is up to date.
```

加上后：

```
[HMR] Updated modules:
[HMR]  - ./src/print.js
[HMR] App is up to date.
```
