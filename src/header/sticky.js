export function stickyHeader() {
    let nav = document.getElementById("header");
    if (window.pageYOffset >= nav.offsetTop + 100) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky");
    }
}