async function fetchdata(city){
    cityName.innerHTML=city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e693dd8995msh0dfdf736038164fp1434e9jsn9f936bb0806b',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
 
    try {
        const response = await fetch(url, options);
        const result = await response.json();
 
        console.log(result);
        cloud_pct.innerHTML = result.cloud_pct
        temp.innerHTML = result.temp 
        feels_like.innerHTML = result.feels_like 
        humidity.innerHTML = result.humidity 
        min_temp.innerHTML = result.min_temp 
        max_temp.innerHTML = result.max_temp 
        wind_speed.innerHTML = result.wind_speed 
        wind_degrees.innerHTML = result.wind_degrees 
        sunrise.innerHTML = result.sunrise 
        sunset.innerHTML = result.sunset
 
    } catch (error) {
        console.error(error);
    }
}
 
 
submit.addEventListener('click',function(e){
    e.preventDefault();
    fetchdata(city.value);
})
 
fetchdata("Noida");