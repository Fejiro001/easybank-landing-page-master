let toggleMenu = document.querySelector('#toggle-menu');
let menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', () => {
    toggleMenuIcon();
    menu.classList.toggle('open-menu');
})

let isMenuOpen = false;
function toggleMenuIcon() {
    let hamburger = './images/icon-hamburger.svg';
    let close_hamburger = './images/icon-close.svg';

    toggleMenu.src = isMenuOpen ? hamburger : close_hamburger;
    isMenuOpen = !isMenuOpen;
    console.log(toggleMenu.src);
}