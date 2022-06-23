header = document.getElementsByTagName("header")[0];
menu_btn = document.getElementsByClassName("menu-btn")[0];
nav_panel = document.querySelector("header nav");

document.onscroll = function () {
    if (window.scrollY > 0) {
        header.classList.add("solid");
    } else {
        header.classList.remove("solid");
    }
};

menu_btn.onclick = function () {
    if (nav_panel.classList.contains("show")) {
        nav_panel.classList.remove("show");
    } else {
        nav_panel.classList.add("show");
    }
}