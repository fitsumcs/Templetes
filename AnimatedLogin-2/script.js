const btn_toogle = document.querySelectorAll('.btn-toggle');
btn_toogle[0].addEventListener('click', choose);
btn_toogle[1].addEventListener('click', choose);
// forms 
const signin = document.querySelector('#signin');
const signup = document.querySelector('#signup');
const btn = document.querySelector('.btn');

function choose(e) {
    if (e.target.id === 'login') {
        signin.style.left = '10px';
        signup.style.left = '400px';
        btn.style.left = '0';

    } else if (e.target.id === 'register') {
        signin.style.left = '-400px';
        signup.style.left = '10px';
        btn.style.left = '110px';
    }
}