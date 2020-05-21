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