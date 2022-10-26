const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentWeatherItemsE1 = document.getElementById('current-weather-items');
const timezoneE1 = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dec'];

const API_Key = 'f55aa5432261b416da5a912fdda7af1f';

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    timeE1.innerHTML = hoursIn12HrFormat + ':' + minutes+ '' + `<span id="am-pm">${ampm}</span>`

    dateE1.innerHTML = days[day] + ',' + date+ '' + months[month]

},1000);

getWeatherData()
function getWeatherData (){
    navigator.geolocation.getCurrentPosition((success) => {
       
        let {latitude,longitude } = success.coords;

        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API_Key}`)
        .then(res => res.json()).then(data => {
            console.log(data);
        
            showWeatherData(data);
        })

    })
}
function showWeatherData (data){
    let {temperature, humidity, wind_speed, uvindex} = data.current;


}