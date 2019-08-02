# demo3-1

[开发](https://www.webpackjs.com/guides/development/)


运行
``` bash
npm run build ## webpack打包

npm run watch ## webpack打包并监听。如果其中一个文件被更新，代码将被重新编译，所以你不必手动运行整个构建。但是还是打开静态文件

npm run dev ## webpack打包并监听。而且提供了一个简单的 web 服务器

npm run server ## 运行node express 服务
```

### 1.source map

为了更容易地追踪错误和警告，JavaScript 提供了 source map 功能，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。

[source map ](https://blog.teamtreehouse.com/introduction-source-maps)

``` javascript
devtool: 'inline-source-map',
```

### 2.观察模式

你可以指示 webpack "watch" 依赖图中的所有文件以进行更改。如果其中一个文件被更新，代码将被重新编译，所以你不必手动运行整个构建。

``` bash
webpack --watch
```

### 3.webpack-dev-server

webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。(web服务版观察模式)

``` javascript
devServer: {
  contentBase: './dist'
},
```

``` bash
webpack-dev-server --open
```

### 4.webpack-dev-middleware

webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。

webpack-dev-middleware 配合 express server 。


``` diff
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
+     publicPath: '/'
    }
```
其中`publicPath`的为[公共路径(public path)](https://www.webpackjs.com/guides/public-path/)

publicPath为项目的访问路径，如果设置为"/web"，那么通过"http://localhost:3000/web"访问项目。


`server.js` 为 node express 服务的代码