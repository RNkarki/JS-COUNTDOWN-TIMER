let date = new Date();

let currentDate = date.toJSON();
//console.log(currentDate,slice(0,10));
document.getElementById("todays_date").innerHTML = currentDate.slice(0,10);


const countDownDate = new Date("April 17 , 2024 21:38:40").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("day_display").innerHTML = days + "<br> Days <br>";
    document.getElementById("other_display").innerHTML = hours + " Hour " + minutes + " Minutes " + seconds + " Seconds";
},1000);