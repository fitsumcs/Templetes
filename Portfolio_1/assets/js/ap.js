const humberger = document.querySelector('#navigation .humberger');
const menu_mob = document.querySelector('#navigation .nav-list ul');
const menu = document.querySelectorAll('#navigation .nav-list ul li a');
const nav = document.querySelector('#navigation .navigation');

humberger.addEventListener('click', () => {
    humberger.classList.toggle('active');
    menu_mob.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        nav.style.backgroundColor = "#29323c";
    } else {
        nav.style.backgroundColor = "transparent";
    }
});

menu.forEach(menu_item => {
    menu_item.addEventListener('click', () => {
        humberger.classList.toggle('active');
        menu_mob.classList.toggle('active');

    });


})