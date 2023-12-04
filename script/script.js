let toggleMenu = document.querySelector('#toggle-menu');
let menu = document.querySelector('#menu');

toggleMenu.addEventListener('click', () => {
    console.log('clicked')
    menu.classList.toggle('open-menu')
});