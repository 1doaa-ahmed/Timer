let countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(()=>{
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow ;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 *24)) ;
    document.querySelector(".days").innerHTML = days ; 
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
    document.querySelector(".hours").innerHTML = hours ;
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".minutes").innerHTML = minutes ; 
    let seconds = Math.floor((dateDiff % (1000 * 60 )) / 1000 );
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds; 
    if (dateDiff == 0) {
        clearInterval(counter);
    }
}, 1000);