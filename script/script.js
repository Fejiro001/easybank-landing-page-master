let toggleMenu = document.querySelector('#toggle-menu');
let menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', () => {
    // toggleMenuIcon();
    menu.classList.toggle('open-menu');
})

function toggleMenuIcon() {
    let hamburger = './images/icon-hamburger.svg';
    let close_hamburger = './images/icon-close.svg';

    toggleMenu.src = (toggleMenu.src === hamburger) ? close_hamburger : hamburger;
    console.log(toggleMenu.src);
}