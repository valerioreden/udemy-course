const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { rmSync } = require("fs");
const app = express();

app.use(bodyParser({extended: true}));
// df0f1fd66ed5e28be202dc04df8a7362 - api key
// https://api.openweathermap.org/data/2.5/weather?q=manila&appid=df0f1fd66ed5e28be202dc04df8a7362

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
	var query = req.body.cityName;
	var apiKey = "df0f1fd66ed5e28be202dc04df8a7362";
	const url = "https://api.openweathermap.org/data/2.5/weather?q="+ query +"&units=metric&appid="+apiKey;
	https.get(url, function(response) {
		response.on("data", function(data){
			var weatherData = JSON.parse(data);
			var description = weatherData.weather[0].description;
			var icon = weatherData.weather[0].icon;
			var temp = weatherData.main.temp;
			var imgSrc = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
			res.write("<p>"+description+"</p>")
			res.write("<h1>It is currently " +temp+" celsius in "+query+"</h1>");
			res.write("<img src="+imgSrc+">");
			res.send();
		});
	});
});

app.listen(3000, function(){
	console.log("Server listening on port 3000.");
});