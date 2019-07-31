# webpack 快速入门

#### 写在前面的话

> 阅读本文之前，先看下面这个webpack的配置文件，如果每一项你都懂，那本文能带给你的收获也许就比较有限，你可以快速浏览或直接跳过；如果你和十天前的我一样，对很多选项存在着疑惑，那花一段时间慢慢阅读本文，你的疑惑一定一个一个都会消失；如果你以前没怎么接触过Webpack，而你又你对webpack感兴趣，那么动手跟着本文中那个贯穿始终的例子写一次，写完以后你会发现你已明明白白的走进了Webpack的大门。

[参考原文](http://www.jianshu.com/p/42e11515c10f)

```javascript
// 一个常见的`webpack`配置文件
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/build",
        filename: "bundle-[hash].js"
    },
    devtool: 'none',
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true,
        hot: true
    },
    module: {
        rules: [{
            test: /(\.jsx|\.js)$/,
            use: {
                loader: "babel-loader"
            },
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                    loader: "css-loader",
                    options: {
                        modules: true
                    }
                }, {
                    loader: "postcss-loader"
                }],
            })
        }]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html" //new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("style.css")

    ],
};
```



## 什么是webpack , 为什么使用它

#### 什么是webpack

现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

* **模块化**，让我们可以把复杂的程序细化为小的文件;
* 类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能转换为JavaScript文件使浏览器可以识别；
* Scss，less等CSS预处理器
* .....

这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常繁琐的，这就为WebPack类的工具的出现提供了需求。

#### 为什么使用webpack

WebPack可以看做是**模块打包机**：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

#### WebPack和Grunt以及Gulp相比有什么特性

其实Webpack和另外两个并没有太多的可比性，Gulp/Grunt是一种能够优化前端的开发流程的工具，而WebPack是一种模块化的解决方案，不过Webpack的优点使得Webpack在很多场景下可以替代Gulp/Grunt类的工具。

1. Grunt和Gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。

    ![图片](./img/gulp.png)


2. Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

    ![图片](./img/webpack.png)

## 开始使用Webpack

### 安装

Webpack可以使用npm安装，新建一个空的练习文件夹（此处命名为learnWebpack)，在终端中转到该文件夹后执行下述指令就可以完成安装。

```javascript
//全局安装
cnpm install -g webpack
//安装到你的项目目录 先创建package.json
cnpm install --save-dev webpack
```


### 正式使用Webpack前的准备

1. 在上述练习文件夹中创建一个`package.json`文件，这是一个标准的npm说明文件，里面蕴含了丰富的信息，包括当前项目的依赖模块，自定义的脚本任务等等。在终端中使用npm init命令可以自动创建这个`package.json`文件

    ```javascript
    cnpm init
    ```

    输入这个命令后，终端会问你一系列诸如项目名称，项目描述，作者等信息，不过不用担心，如果你不准备在npm中发布你的模块，这些问题的答案都不重要，回车默认即可。

2. `package.json`文件已经就绪，我们在本项目中安装Webpack作为依赖包

    ```javascript
    // 安装Webpack
    cnpm install --save-dev webpack
    ```

3. 回到之前的空文件夹，并在里面创建两个文件夹,app文件夹和public文件夹，app文件夹用来存放原始数据和我们将写的JavaScript模块，public文件夹用来存放之后供浏览器读取的文件（包括使用webpack打包生成的js文件以及一个index.html文件）。接下来我们再创建三个文件:

    `index.html`--放在public文件夹中;
    `Greeter.js`-- 放在app文件夹中;
    `main.js`-- 放在app文件夹中;

此时项目结构如下

``` diff
|- webpack
    |- app
+       |- Greeter.js
+       |- main.js
    |- public
+       |- index.html
```

我们在`index.html`文件中写入最基础的html代码，它在这里目的在于引入打包后的js文件（这里我们先把之后打包后的js文件命名为`bundle.js`，之后我们还会详细讲述）。

``` html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Webpack Sample Project</title>
</head>

<body>
    <div id='root'>
    </div>
    <script src="bundle.js"></script>
</body>

</html>
```

我们在`Greeter.js`中定义一个返回包含问候信息的html元素的函数,并依据CommonJS规范导出这个函数为一个模块：

``` js
// Greeter.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi there and greetings!";
  return greet;
};
```

`main.js`文件中我们写入下述代码，用以把`Greeter模块`返回的节点插入页面。

``` js
//main.js
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());
```



















--------------------------------------
## 正式使用Webpack

### 初始用法

webpack可以在终端中使用，在基本的使用方法如下：

``` bash
# {extry file}出填写入口文件的路径，本文中就是上述main.js的路径，
# {destination for bundled file}处填写打包文件的存放路径
# 填写路径的时候不用添加{}
webpack {entry file} {destination for bundled file}
```

指定入口文件后，webpack将自动识别项目所依赖的其它文件，不过需要注意的是如果你的webpack不是全局安装的，那么当你在终端中使用此命令时，需要额外指定其在node_modules中的地址，继续上面的例子，在终端中输入如下命令

``` bash
# webpack非全局安装的情况
node_modules/.bin/webpack app/main.js public/bundle.js
```

> 实际操作
```bash
# 运行命令 由于有全局安装所以直接用 webpack
$ webpack app/main.js public/bundle.js

# 结果
Hash: 47dc173ebdf7dd0247c3
Version: webpack 3.6.0
Time: 64ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.83 kB       0  [emitted]  main
   [0] ./app/main.js 109 bytes {0} [built]
   [1] ./app/Greeter.js 170 bytes {0} [built]
```

``` diff
文件变化
|- webpack
    |- app
        |- Greeter.js
        |- main.js
    |- public
        |- index.html
+       |- bundle.js
```











------------------------------------------------------------

### 通过配置文件来使用Webpack

Webpack拥有很多其它的比较高级的功能（比如说本文后面会介绍的`loaders`和`plugins`），这些功能其实都可以通过命令行模式实现，但是正如前面提到的，这样不太方便且容易出错的，更好的办法是定义一个配置文件，这个配置文件其实也是一个简单的JavaScript模块，我们可以把所有的与打包相关的信息放在里面。

继续上面的例子来说明如何写这个配置文件，在当前练习文件夹的根目录下新建一个名为`webpack.config.js`的文件，我们在其中写入如下所示的简单配置代码，目前的配置主要涉及到的内容是入口文件路径和打包后文件的存放路径。

``` javascript
// webpack.config.js
module.exports = {
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}
```
**注：“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。**

> 实际操作
``` diff
文件变化
|- webpack
    |- app
        |- Greeter.js
        |- main.js
    |- public
        |- index.html
+   |- webpack.config.js
```

``` js
// webpack.config.js
module.exports = {
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    }
}
```

```bash
# 运行命令
$ webpack

# 运行结果
Hash: 47dc173ebdf7dd0247c3
Version: webpack 3.6.0
Time: 64ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.83 kB       0  [emitted]  main
   [0] ./app/main.js 109 bytes {0} [built]
   [1] ./app/Greeter.js 170 bytes {0} [built]
```

**配置好之后，直接执行webpack命令就可以，不需要再在命令行里面**
