const secHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    let degrees = ((seconds / 60) * 360) + 90;
    secHand.style.transform = `rotate(${degrees}deg)`;


    const mins = now.getMinutes();
    let minDegrees = ((mins / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hrs = now.getHours();
    let hourDegrees = ((hrs / 24) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}



setInterval(setDate, 1000);