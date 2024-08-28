const buttonOpen = document.querySelector('#open-menu')
const buttonClose = document.querySelector('#close-menu')
const itemList = document.querySelectorAll('.itemList')
const menuMobile = document.querySelector('.menu-mobile')
const overlayMobile = document.querySelector('.overlay-menu-mobile')

const openMenu = () => {
    menuMobile.classList.add('open')
    overlayMobile.classList.add('open')
}

const closeMenu = () => {
    menuMobile.classList.remove('open')
    overlayMobile.classList.remove('open')
}

overlayMobile.addEventListener('click', () => {
    closeMenu()
})

itemList.forEach(item => {
    item.addEventListener('click', () => {
        closeMenu()
    })
})

