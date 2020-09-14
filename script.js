  // Function for dumping the JSON content for each button into the div
function displayWeatherInfo {
    var weather = $(this).attr("weather-data");
    var city = "Atlanta";
    var key = "7bb6440e9b152221c42f901d147bdac3";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + key;


   //api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={your api key};
   //api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

    console.log(query);      // This .on("click") function will trigger the AJAX Call



    $.ajax({
        url: queryURL,
        method: "GET"
        //dataType: "json"
    }).then(function(response) {
        console.log(response);
        // $("#weather-view").text(JSON.stringify(response));
        var tRow = $("<tr>");
        var weatherEl = $("<td>").text("Weather");
        var elementEl = $("<td>").text("Element");
        var nowWeather = $("<td>").text("Now");

        $tRow.append(weather,elementEl, nowWeather);
        $("tbody").append(tRow);


      // Create and save a reference to new empty table row
      // Create and save references to 3 td elements containing the Title, Year, and Actors from the AJAX response object
      // Append the td elements to the new table row
      // Append the table row to the tbody element

    });

    // Repeat the above logic to add rows for two more movies of your choice

}

/////////////////Just Sudo From the website for JSON
// {
//     "coord": {
//       "lon": -122.08,                           /
//       "lat": 37.39                              /
//     },                                          /
//     "weather": [                                /
//       {                                         /
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01d"
//       }
//     ],
//     "base": "stations",
//     "main": {
//       "temp": 282.55,
//       "feels_like": 281.86,
//       "temp_min": 280.37,
//       "temp_max": 284.26,
//       "pressure": 1023,
//       "humidity": 100
//     },
//     "visibility": 16093,
//     "wind": {
//       "speed": 1.5,
//       "deg": 350
//     },
//     "clouds": {
//       "all": 1
//     },
//     "dt": 1560350645,
//     "sys": {
//       "type": 1,
//       "id": 5122,
//       "message": 0.0139,
//       "country": "US",
//       "sunrise": 1560343627,
//       "sunset": 1560396563
//     },
//     "timezone": -25200,
//     "id": 420006353,
//     "name": "Mountain View",
//     "cod": 200
//   }
///////////////////////////////////////////////////  


