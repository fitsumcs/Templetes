// doc 
const time = document.querySelector('#time');



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
getTime();