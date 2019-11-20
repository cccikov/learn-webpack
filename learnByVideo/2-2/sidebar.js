function Sidebar() {
    var root = document.getElementById("root");
    var sidebar = document.createElement("div");
    sidebar.innerText = "sidebar";
    root.append(sidebar);
}

export default Sidebar;