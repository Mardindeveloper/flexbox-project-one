const menu = document.getElementsByClassName('menu')[0];
const menuBtn = document.getElementsByClassName('header__icon')[0];
const menuBtnIcon = document.querySelector('.header__icon i');
const menuIcon = document.querySelector('.menu__icon i');

menuBtn.addEventListener('click', function () {
    if (menuBtnIcon.classList.contains('fa-bars')) {
        menu.style.left = 0;
        menuBtnIcon.classList = 'fa-solid fa-times';
    } else {
        menu.style.left = '-256px';
        menuBtnIcon.classList = 'fa-solid fa-bars';
    }
});

menuIcon.addEventListener('click', function () {
    menu.style.left = '-256px';
    menuBtnIcon.classList = 'fa-solid fa-bars';
})