//dom elements 
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const menu = document.querySelector('.nav-list');

open.addEventListener('click', () => {

    menu.classList.add('active');
});
close.addEventListener('click', () => {

    menu.classList.remove('active');
});