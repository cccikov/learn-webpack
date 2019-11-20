# 从基础到实战 手把手带你掌握新版Webpack4.0完整 学习笔记

从基础到实战 手把手带你掌握新版Webpack4.0完整 学习笔记

## 2-1 笔记

`npx webpack index.js`

## 2-3 笔记

`npm init -y` 自动配置package.json
`npm info webpack` 查看webpack版本信息

推荐在项目中安装webpack，使用`npx`运行项目中的模块

## 2-4 笔记

配置 entry output
记得引入 node `path` 模块

默认配置文件名字叫 `webpack.config.js` 执行 `webpack` 命令的时候后自动执行这个配置文件

自定义配置文件 `webpack --config xxxx.js`

用 `package.json` 里面的 `script` 里面配置命令简化运行命令，先从当前项目找指令，相当于`npx`；找不到再从全局找指令
