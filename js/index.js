header = document.getElementsByTagName("header")[0];

document.onscroll = function () {
    if (window.scrollY > 0) {
        header.classList.add("solid");
    } else {
        header.classList.remove("solid");
    }
};
