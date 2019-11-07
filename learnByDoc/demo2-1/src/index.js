import _ from 'lodash';
import css from './style.css'; // 会通过创建<style>标签加入到<head>，并将style.css里面的样式写在<style>标签里，这样引用这个js的html就会有style.css里面的样式
import Icon from './icon.png'; // 加载图片，Icon是一个url地址
import Data from './data.xml';
console.log(css, Icon, Data);

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', ' 图标：&#xe64a;'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());