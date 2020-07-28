// doc 
const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');
const name = document.querySelector('#name');
const focus = document.querySelector('#focus');

// Event 
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);




function getTime() {

    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let am_pm = hour > 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;


    time.innerHTML = `${hour} : ${addZero(minute)} : ${addZero(second)} ${am_pm }`;
    setTimeout(getTime, 1000);



}

function addZero(time) {
    let addZerov = (parseInt(time) < 10 ? '0' : '') + time;
    return addZerov;
}

function getGreeting() {
    const hr = new Date().getHours();

    if (hr < 12) {
        // Goo Morning 
        document.body.style.backgroundImage = "url('./img/morning.jpg')";
        greeting.textContent = "Good Morning";


    } else if (hr < 18) {
        // Good AfterNoon
        document.body.style.backgroundImage = "url('./img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";


    } else {
        // Good Evening 
        document.body.style.backgroundImage = "url('./img/evening.jpg')";
        greeting.textContent = "Good Evening";


    }
}
// Set Name
function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }

}
// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }

}

function getFocus() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focuss') === '') {
        focus.textContent = "[Enter Your Focus]";
    } else {

        focus.textContent = localStorage.getItem('focus');
    }
}

function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
        name.textContent = "[Enter Your Name]";
    } else {

        name.textContent = localStorage.getItem('name');
    }
}
getTime();
getGreeting();
getName();
getFocus();