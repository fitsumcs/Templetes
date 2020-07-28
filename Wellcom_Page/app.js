// doc 
const time = document.querySelector('#time');
const greeting = document.querySelector('#greeting');




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
getTime();
getGreeting();