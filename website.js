//Targetting toggle menu
const menu = document.querySelector('#mobile-menu');

//Targetting SneakersOfFame navbar logo
const navLogo = document.querySelector('#navbar_logo');

//Targetting menu class links
const menuLinks = document.querySelector('.navbar_menu');

//Display Mobile Menu
/* Create an error function */
const mobileMenu = () => { 
    menu.classList.toggle('is-active'); /* .toggle think of it as active or not active, true or false */
    menuLinks.classList.toggle('active');
};

//To toggle the above.
menu.addEventListener('click', mobileMenu);

