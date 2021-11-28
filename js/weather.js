const API_KEY = "11788c32fa302da608d06c0169b819fc"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        console.log(data.name);
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
} 

function onGeoError(){
    alert("Cat't find your. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);