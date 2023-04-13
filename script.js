//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=3a094a2f4f14be581aa9bf9e66e33f75

let API_KEY="7845698422f678b65429750212624030";

getweatherdata = (city) =>{
const URL="https://api.openweathermap.org/data/2.5/weather";

const full_URL=`${URL}?q=${city}&appid=${API_KEY}`;
console.log(full_URL)

const weatherpromice=fetch(full_URL);

return weatherpromice.then((response)=>{
    return response.json()
})
}

scearchcity = ()=>{
    let city=document.getElementById("cityname").value;

    getweatherdata(city)
    .then((response) =>{
        console.log(response)
        displayweather(response)

    })
    .catch((err)=>{
        console.log(err)
    })
}

displayweather = (weather) =>{
    document.getElementById("city-name").innerText=weather.name;
    document.getElementById("W-type").innerText=weather.weather[0].main;
    document.getElementById("max-temp").innerText=weather.main.temp_max;
    document.getElementById("min-temp").innerText=weather.main.temp_min;
}