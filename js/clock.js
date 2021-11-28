const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getO(time){
    return String(time).padStart(2, '0');
}

function getXmas(){
    const xmas = new Date("2021-12-25T00:00:00+0900");
    const now = new Date();
    const distances = xmas.getTime() - now.getTime();

    const day = Math.floor(distances/(1000*60*60*24));
    var hours = Math.floor((distances % (1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distances % (1000*60*60))/(1000*60));
    var seconds = Math.floor((distances % (1000*60))/1000);
    hours = getO(hours);
    minutes = getO(minutes);
    seconds = getO(seconds);
    clock.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(getClock, 1000);