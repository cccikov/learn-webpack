// es6 module
// webpack 模块打包工具
// commonJS -- node
// CMD
// AMD

// import Header from "./header";
// import Sidebar from "./sidebar";
// import Content from "./content";

let Header = require('./header.js');
let Sidebar = require('./sidebar');
let Content = require('./content');

new Header();
new Sidebar();
new Content();