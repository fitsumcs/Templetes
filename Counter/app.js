// Selector 
const counters = document.querySelectorAll('.counter');
const maxSpeed = 100;

counters.forEach((counter) => {

    const data = +counter.getAttribute('data-target');

    const cSpeed = data / maxSpeed;

    const updateCount = () => {
        let count = +counter.innerHTML;

        if (count < data) {
            counter.innerHTML = Math.ceil(count + cSpeed);
            setTimeout(updateCount, 3);
        } else {
            counter.innerHTML = data;
        }


    }

    // console.log(typeof count);


    updateCount();
});