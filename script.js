let dropdown = document.querySelector('.nav__dropdown')
let menu = document.querySelector('.header__menu--dropdown')

menu.addEventListener('click', show)

function show() {
    dropdown.classList.toggle('active')   
}
