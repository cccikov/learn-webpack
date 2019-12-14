# 从基础到实战 手把手带你掌握新版Webpack4.0完整 学习笔记

从基础到实战 手把手带你掌握新版Webpack4.0完整 学习笔记

## 2-1 笔记

`npx webpack index.js`

## 2-2 笔记

`npx webpack index.js`

视频结尾有对文档进行一些介绍

## 2-3 笔记

`npm init -y` 自动配置package.json
`npm info webpack` 查看webpack版本信息

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

## 2-4-2 笔记

> 模块化
