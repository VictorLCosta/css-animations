let nav = document.querySelector(".nav-links");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
    nav.classList.toggle("active")
    menuBtn.classList.toggle("active")
    menuBtn.classList.toggle("fa-times")
}

window.onscroll = () => {
    nav.classList.remove("active")
    menuBtn.classList.remove("active")
}