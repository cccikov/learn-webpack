# demo5-4

[模块热替换](https://www.webpackjs.com/guides/hot-module-replacement/)

[模块热替换 原版](https://webpack.js.org/guides/hot-module-replacement/)

采用 demo5-1 的webpack开启热替换方式

``` diff
    devServer: {
        contentBase: './dist',
        hot: true
    },
```

### js 部分 热替换

如果你继续点击示例页面上的按钮，你会发现控制台仍在打印这旧的 printMe 功能。

这是因为按钮的 onclick 事件仍然绑定在旧的 printMe 函数上。

为了让它与 HMR 正常工作，我们需要使用 module.hot.accept 更新绑定到新的 printMe 函数上：


``` diff
- document.body.appendChild(component());
+ let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
+ document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
-     printMe();
+     document.body.removeChild(element);
+     element = component(); // 重新渲染页面后，component 更新 click 事件处理
+     document.body.appendChild(element);
    })
  }
```


### css 热替换

借助于 style-loader 的帮助，CSS 的模块热替换实际上是相当简单的。


### 其他

* **React Hot Loader**：实时调整 react 组件。
* **Vue Loader**：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。
* **Elm Hot Loader**：支持用于 Elm 程序语言的 HMR。
* **Redux HMR**：无需 loader 或插件！只需对 main store 文件进行简单的修改。
* **Angular HMR**：No loader necessary! A simple change to your main NgModule file is all that's required to have full control over the HMR APIs.没有必要使用 loader！只需对主要的 NgModule 文件进行简单的修改，由 HMR API 完全控制。