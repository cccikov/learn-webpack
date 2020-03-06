let Header = require('./header.js'); // commonJS 规范，当然也可以用es6模块规范
let Sidebar = require('./sidebar');
let Content = require('./content');

import chrome_es6 from "./chrome.png";
let chrome_commonJS = require("./chrome.png");

new Header();
new Sidebar();
new Content();