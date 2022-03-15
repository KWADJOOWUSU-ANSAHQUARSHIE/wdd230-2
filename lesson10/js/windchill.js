function chill() {
    var t = 32;
    var s = 15;
    var chill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t* Math.pow(s, 0.16);

    document.getElementById("temp").innerHTML = t.toFixed(1);
    document.getElementById("speed").innerHTML = s.toFixed(1);
    document.getElementById("chill").innerHTML = chill.toFixed(1);
}
window.addEventListener("load", chill())


const apiURL = "//api.openweathermap.org/data/2.5/weather?q=accra&units=imperial&appid=44af6e0267e626fb09390194949d7a28" ;



 fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
    console.log(jsObject);
    document.querySelector('#temp').textContent = jsObject.main.temp;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    // document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
    const sped = jsObject.wind.speed;
    document.querySelector("#wind-speed").textContent = sped;
  });

