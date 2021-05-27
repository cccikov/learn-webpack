# 从基础到实战 手把手带你掌握新版Webpack4.0完整 学习笔记

从基础到实战 手把手带你掌握新版Webpack4.0完整 学习笔记

## 2-1 笔记

局部安装webpack，不推荐全局安装是因为不同项目可能需要不同的webpack版本

`npx webpack index.js`

## 2-2 笔记

`npx webpack index.js`

视频结尾有对文档进行一些介绍

## 2-3 笔记

`npm init -y` 自动配置package.json
`npm info webpack` 查看webpack版本信息
`npm view webpack versions` 查看webpack所有版本

推荐在项目中安装webpack，使用`npx`运行项目中的指令

## 2-4 笔记

> webpack 配置文件

配置 entry output
记得引入 node `path` 模块

1. 默认配置文件名字叫 `webpack.config.js` 执行 `webpack` 命令的时候后自动执行这个配置文件，如果没有这个文件，会以webpack默认配置进行打包。[webpack.config.js](./2-4/webpack.config.js)

    `npx webpack` 直接按照配置 从入口文件（`entry`）开始打包 输出文件（`output`）[配置文档](https://webpack.js.org/concepts/)

    ```
        npm run build
    ```

2. 自定义配置文件 `webpack --config xxxx.js`

    ```
        npm run build:rename
    ```

用 `package.json` 里面的 `script` 里面配置命令简化运行命令，先从当前项目找指令，相当于`npx`；找不到再从全局找指令

“webpack-cli” 是为了让我们可以在命令行中运行 `webpack` 这个命令

## 2-4-2 笔记

> 模块化

```
    npm run build
```

## 2-5 笔记

> 解析打包时，终端输出内容

1. main

    ``` javascript
        entry: "./src/index.js",
    ```

    是下面的简写

    ``` javascript
        entry: {
            main: "./src/index.js"
        },
    ```

2. 模式

    设置模式后，在打包时，终端就不会输出警告

    ``` javascript
        mode:"production" // 默认 生产模式，压缩输出文件
        mode:"development" // 开发模式，不压缩输出文件，易于调试，知道报错出现在具体哪个模块（文件）中
    ```

## 3-1 Loader

1. 配置项

    * https://webpack.js.org/concepts/
    * https://webpack.js.org/configuration/ 配置项
    * https://webpack.js.org/plugins/ 官方推荐插件
    * https://webpack.js.org/loaders/ 官方loader

2. loader

    打包图片

    `npm run build` 命令

    webpack 默认配置下只能打包js文件。要打包其他类型文件，需要配置 `module` 字段。

    配置 `module.rules` 打包规则组成的数组

    每条规则 `Rule`

    [module](https://webpack.js.org/configuration/module/)
    [module.rules](https://webpack.js.org/configuration/module/#modulerules)
    [Rule](https://webpack.js.org/configuration/module/#rule)

    ``` javascript
    rules: [{
        test: /\.png$/,
        use: {
            loader: 'file-loader'
        }
    }] // 打包规则
    ```

    ``` javascript
    {
        test: /\.png$/,
        use: {
            loader: 'file-loader'
        }
    } // 为rules里面其中一条rule
    ```

> Loader

file-loader 返回 file的路径 可以直接引入file，得到路径，用变量存储，就不用纠结js中路径的问题

## 3-2 url-loader

url-loader 与 file-loader 类似，但是如果文件大写小于一个设置的值，则会返回 data URL

## 3-3 style-loader,css-loader,sass-loader,postcss-loader

use 里面可以改为数组

style-loader 将模块导出的内容作为样式并添加到 DOM 中

css-loader 加载 CSS 文件并解析 import 的 CSS 文件，最终返回 CSS 代码

postcss-loader 增加浏览器兼容前缀

Loaders 可以通过传入多个 loaders 以达到链式调用的效果，它们会从右到左被应用（从最后到最先配置）

## 3-4

``` javascript
    importLoaders: 2, // 在css里面 import 的资源需要经过多少个loader处理
    modules: true // css 的模块化打包
```

## 3-5

https://webpack.js.org/plugins/

* html-webpack-plugin

    https://webpack.js.org/plugins/html-webpack-plugin/

    该插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle

    如果你有多个 webpack 入口，他们都会在已生成 HTML 文件中的 `<script>` 标签内引入。

    如果在 webpack 的输出中有任何 CSS 资源（例如，使用 MiniCssExtractPlugin 提取的 CSS），那么这些资源也会在 HTML 文件 `<head>` 元素中的 `<link>` 标签内引入。

## 3-6

https://webpack.js.org/configuration/output/

https://webpack.js.org/guides/output-management/

## 3-7 sourcemap

inline map内容在js内部
cheap 只会告诉你第几行，不会精确到第几列；只针对业务代码，不会针对loader，第三方模块
module 管第三方模块
eval 通过eval方式来达到sourcemap

## 3-8 webpack dev server

https://webpack.docschina.org/guides/development/

* 监听文件改变

    https://webpack.docschina.org/api/cli/ webpack 命令行语法

    `webpack --watch`

* 监听文件改变，并且刷新浏览器 webpack-dev-server

    https://webpack.docschina.org/configuration/dev-server/

    ``` javascript
    devServer: {
        contentBase: './dist',
        open: true, // 自动打开浏览器
        port: 8080, // 端口
        proxy: {} // 代理
    },
    ```

    命令：`webpack-dev-server`

* 用 nodejs 起一个服务器；用 webpack-dev-middleware 中间件

    https://webpack.docschina.org/api/node/ webpack 在 Node.js 运行时下直接使用

## 3-9 hot-module-replacement（HMR）

https://webpack.docschina.org/guides/hot-module-replacement/
https://webpack.js.org/guides/hot-module-replacement/

由于采用 webpack-dev-server 起服务器后，改变文件，webpack会自动帮我们刷新页面，导致之前页面渲染的内容会消失

``` javascript
devServer: {
    contentBase: './dist',
    open: true,
    port: 8080,
    hot: true, // 启用 webpack 的 Hot Module Replacement 功能
    hotOnly: true // 启用热模块替换（请参见 devServer.hot ），而无需页面刷新作为构建失败时的回退。
},
```

模拟vue，react类似框架的HMR
``` diff
  import _ from 'lodash';
  import printMe from './print.js';

  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;  // onclick event is bind to the original printMe function

    element.appendChild(btn);

    return element;
  }

- document.body.appendChild(component());
+ let element = component(); // Store the element to re-render on print.js changes
+ document.body.appendChild(element);

  if (module.hot) {
    module.hot.accept('./print.js', function() {
      console.log('Accepting the updated printMe module!');
-     printMe();
+     document.body.removeChild(element);
+     element = component(); // Re-render the "component" to update the click handler
+     document.body.appendChild(element);
    })
  }
```

## 3-11 babel

https://babeljs.io/
https://babeljs.io/setup

``` javascript
{
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
```

* polyfill

    https://babeljs.io/docs/en/babel-polyfill

    - 安装

        ``` javascript
        npm install --save @babel/polyfill
        ```

    - 使用（全局使用polyfill）

        ``` javascript
        import "@babel/polyfill"; // 全局使用polyfill
        ```

    - 配置

        `useBuiltIns："usage"`
        `targets: {}`

        ``` javascript
        presets: [
            ['@babel/preset-env', {
                targets: {
                    chrome: "67",
                },
                useBuiltIns: 'usage' // 按需 polyfill，如果有了这个配置 polyfill 会自动引入，就不需要 import "@babel/polyfill" 全局引入了
            }]
        ]
        ```

* transform-runtime

    不会让 polyfill 全局污染，适合写第三方模块，如果只是写业务代码，polyfill可以全局引入

    - 配置

    ``` javascript
    "plugins": [
        [
            "@babel/plugin-transform-runtime",
            {
                "absoluteRuntime": false,
                "corejs": false,
                "helpers": true,
                "regenerator": true,
                "version": "7.0.0-beta.0"
            }
        ]
    ]
    ```

单独配置文件

* Project-wide configuration

    - `babel.config.json` files, with the different extensions (`.js`, `.cjs`, `.mjs`)

* File-relative configuration

    - `.babelrc.json` files, with the different extensions (`.babelrc`, `.js`, `.cjs`, `.mjs`)

    - `package.json` files with a `"babel"` key

##  4-1 tree-shaking

https://webpack.js.org/guides/tree-shaking/

``` diff
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
+ mode: 'development',
+ optimization: {
+   usedExports: true,
+ },
```


`"sideEffects": false`

`"sideEffects": ["*.css"]`

## 4-2 模式

https://webpack.js.org/configuration/mode/#usage
https://webpack.js.org/guides/development/
https://webpack.js.org/guides/production/

``` javascript
 "scripts": {
    "dev": "webpack-dev-server --config ./build/webpack.dev.js",
    "build": "webpack --config ./build/webpack.prod.js"
  },
```

```
const merge = require('webpack-merge')
```

## 4-3 代码分隔

https://webpack.docschina.org/guides/code-splitting/

https://webpack.docschina.org/plugins/split-chunks-plugin/

``` javascript
optimization: {
    splitChunks: { // 代码分隔
        chunks: 'all'
    }
},
```

``` javascript
module.exports = {
  //...
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```

* 代码分割，和webpack无关
* webpack中实现代码分割，两种方式
    1. 同步代码： 只需要在webpack.common.js中做optimization的配置即可
    2. 异步代码(import): 异步代码，无需做任何配置，会自动进行代码分割，放置到新的文件中

## 4-5 SplitChunksPlugin 配置参数详解

https://webpack.js.org/plugins/split-chunks-plugin/
https://webpack.docschina.org/plugins/split-chunks-plugin/

* 异步import babel

    https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import

    /* webpackChunkName:"lodash" */

* SplitChunksPlugin

    ``` javascript
    module.exports = {
      //...
      optimization: {
        splitChunks: {
          chunks: 'async', // async 异步代码分隔，all-根据cacheGroups对同步异步代码分隔
          minSize: 20000,
          minRemainingSize: 0,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            vendors:{}, // ?? 什么来的
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      },
    };
    ```
  
## 4-7 Lazy Loading 懒加载，Chunk 是什么？

每个文件都是一个 Chunk 


## 其他

1. webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead