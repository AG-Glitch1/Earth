let hamburger = document.querySelector('.hamburger')
let navMenu = document.querySelector('.ulheader')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
