let nav = document.querySelector(".nav-links");

document.querySelector(".fa-bars").onclick = () => {
    nav.classList.toggle("active")
}

window.onscroll = () => {
    nav.classList.remove("active")
}