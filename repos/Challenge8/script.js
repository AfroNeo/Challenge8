

var APIKEY = "840e2eedb61362e6a6b45816372f15b9";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=840e2eedb61362e6a6b45816372f15b9";

//You'll want to allow your application to accept user input and store it in the variable that you've created. You'll also likely need to specify state and country variables in your API call,

var city;


//put fetch inside of an event listener
//My weather API key 840e2eedb61362e6a6b45816372f15b9
// fetch("api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}")

fetch("https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=840e2eedb61362e6a6b45816372f15b9");


    .then(response => response.json())
    .then(data => {
        
        console.log(data);
    })

    //>This is another copy and paste example of the code above.
    // fetch("api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=840e2eedb61362e6a6b45816372f15b9")
    // .then(response => response.json())
    // .then(data => {
        
    //     console.log(data);
    // })


    //This is an api call example
    //api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}


//on click fire off....grab the value from the button its self, you can pull off the string from the button and use delegation
//event.target...will grab the event of the city.

//focus on the functionaliy
//get the buttons working with local storage and getting the data back.





