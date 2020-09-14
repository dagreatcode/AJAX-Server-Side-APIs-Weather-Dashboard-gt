  // Function for dumping the JSON content for each button into the div
function displayWeatherInfo
    weather = $(this).attr("weather-data");
    queryURL = "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=799c442d6353dfbe875ad9803c2b4a75";
    console.log(query);      // This .on("click") function will trigger the AJAX Call



    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        // $("#weather-view").text(JSON.stringify(response));
        var tRow = $("<tr>");
        var weatherEl = $("<td>").text("Weather");
        var elementEl = $("<td>").text("Element");
        var nowWeather = $("<td>").text("Now")

        
        });
}

