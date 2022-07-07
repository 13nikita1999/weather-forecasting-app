// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// 8c9f3d28dced8d021f983e7b340db0b4

const weatherApi = {
    key : "8c9f3d28dced8d021f983e7b340db0b4",
    baseUrl : "https://api.openweathermap.org/data/2.5/weather"
}

// Event Listener Function on KeyPress
const serachInputBox = document.getElementById('input-box');
serachInputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){    // Enter key Code is 13
    getWeatherReport(serachInputBox.value)
    document.querySelector('.weather-body').style.display= "block";
    }
});

// Get Weather Report 
function getWeatherReport(city){
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather=>{
        return weather.json();
    }).then(showWeatherReport);
}

// Show weather Report
function showWeatherReport(weather){
    console.log(weather)

    // ------------------------------get city and country name
    let city= document.getElementById('city')
    city.innerText= `${weather.name} ${weather.sys.country}`; 

    // -------------------------------------- Get temperature
    let temperature= document.getElementById('temp')
    temperature.innerHTML= `${Math.round(weather.main.temp)}&deg;C`;

    // ------------------------------------------get min max temp
    let minMax= document.getElementById('min-max')
    minMax.innerHTML= `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    // ---------------------------- Weather Type
    let wetype= document.getElementById('weather')
    wetype.innerText= `${weather.weather[0].main}`;
    
    //  -------------------------------------Date
    let date= document.getElementById('date')
    let todatdate= new Date();
    date.innerText= dateManage(todatdate);
 
    const heading= document.getElementById("heading");
    if(wetype.textContent== 'Clear'){
        document.body.style.background= "url(./images/clear.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="rgb(13, 92, 13)";
    }
    else if(wetype.textContent== 'Clouds'){
        document.body.style.background= "url(./images/cloudy.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="navy";

    }
    else if(wetype.textContent== 'Mist'){
        document.body.style.background= "url(./images/mist.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="rgb(180, 18, 45)";
    }
    else if(wetype.textContent== 'Dust'){
        document.body.style.background= "url(./images/dust.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="rgb(7, 74, 110)";
    }
    else if(wetype.textContent== 'Haze'){
        document.body.style.background= "url(./images/haze.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="rgb(5, 70, 6)";
    }
    else if(wetype.textContent== 'Rain'){
        document.body.style.background= "url(./images/rain.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="rgb(199, 193, 11)";
    }
    else if(wetype.textContent== 'Snow'){
        document.body.style.background= "url(./images/snow.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color=rgb(223, 147, 6);
    }
    else if(wetype.textContent== 'Sunny'){
        document.body.style.background= "url(./images/sunny.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="red";
    }
    else if(wetype.textContent== 'Thunderstrom'){
        document.body.style.background= "url(./images/thunderstrom.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="white";
    }
    else if(wetype.textContent== 'Drizzle'){
        document.body.style.background= "url(./images/drizzle.jpg)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="white";
    }
    else{
        document.body.style.background= "url(./images/back.webp)"
        document.body.style.backgroundRepeat= "no-repeat"
        document.body.style.backgroundSize= "cover";
        heading.style.color="white"
    }
}
//   Function Today date
function dateManage(dateArg){
    let days= ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

    let months= ['January', 'February','March','April','May','june','July','August','September','October','November','December'];

    let year= dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date= dateArg.getDate();
    let day= days[dateArg.getDay()];
    return `${date} ${month} (${day}) ${year}`;
}