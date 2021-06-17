const menuBtn = document.querySelector('.menu-btn')
const burger = document.querySelector('.menu-btn__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const menuItems = document.querySelectorAll('.menu-nav__item')

const togglemenu = () => {
    if (!showMenu) {
        burger.classList.add('open')
        menuNav.classList.add('open')
        nav.classList.add('open')
        menuItems.forEach(item => {
            item.classList.add('open') 
        })

    } else {
        burger.classList.remove('open')
        menuNav.classList.remove('open')
        nav.classList.remove('open')
        menuItems.forEach(item => {
            item.classList.remove('open')
        })
    }

    showMenu = !showMenu
}

let showMenu = false
menuBtn.addEventListener('click', togglemenu)

