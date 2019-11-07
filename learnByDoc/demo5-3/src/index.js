import _ from 'lodash';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    // 接收 print 变化
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!',"修改print.js就会触发下面函数");
        printMe();
    })
}