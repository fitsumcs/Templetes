//dom elements 
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const menu = document.querySelector('.nav-list');
const nav_link = document.querySelectorAll('.nav-item a');


open.addEventListener('click', () => {

    menu.classList.add('active');
});
close.addEventListener('click', () => {

    menu.classList.remove('active');
});
nav_link.forEach((item) => {
    item.addEventListener('click', () => {

        menu.classList.remove('active');
    });
})