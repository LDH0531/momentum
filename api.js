const API_KEY = "5e3d00e681befe094d253bebc644efb3";

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((date) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = date.name; 
        weather.innerText = `${date.weather[0].main} / ${date.main.temp} ℃`;
    });
}

function onGeoError(){
    alert("Can't find you!");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);