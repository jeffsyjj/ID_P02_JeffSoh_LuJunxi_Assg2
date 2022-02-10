const toggle = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

//Display mobile menu
const mobileMenu = () => {
    toggle.classList.toggle('is-active');
    menuLinks.classList.toggle('is-active');
}

toggle.addEventListener('click', mobileMenu);