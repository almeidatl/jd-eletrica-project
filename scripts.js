//function to open mobile menu

const menuScreen = document.querySelector('.menuScreen')
const menuBtn = document.querySelector('.menuMobileMenu')

function openMenu(){
    menuScreen.classList.remove('menuScreen')
    menuScreen.classList.add('menuScreenActive')

}
