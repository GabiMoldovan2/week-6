function getWheather(coords){
    var apiKey="bec8639d1d3f5811e8668a52216b21ad";
    var lat= coords.lat;
    var lon= coords.lon;
    var url="https://api.openweathermap.org/data/3.0/onecall?lat="+
    lat +
    "&lon" +
    lon +
    "&appid=" +
    apiKey +
    "&units-metric";
    return fetch(url)
    .then(function(response){
        if(response.status !==200){
            throw new Error ("eroare")
        }
    })}
    return response.json();
    }
    .then(function(response)){
        return response.main.temp;
    };



  