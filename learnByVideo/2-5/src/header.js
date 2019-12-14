function Header() {
    var root = document.getElementById("root");
    var header = document.createElement("div");
    header.innerText = "header";
    console.log("分别切换模式，看看是否能知道属于什么模块")
    root.append(header);
}

module.exports = Header