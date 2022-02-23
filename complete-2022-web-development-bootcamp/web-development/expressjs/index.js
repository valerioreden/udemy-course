const express = require("express");

const app = express();

app.get("/", function(request, response){
	response.send("<h1>Hello, World!</h1>")
});

app.get("/contact", function(request, response){
	response.send("<h1>Contact me at redenv@careindeed.com</h1>")
});

app.get("/about", function(request, response){
	response.send("<h1>I am a developer based in philipiines!</h1>")
});

app.get("/hobbies", function(request, response){
	response.send("<h1>My hobbies are playing games!</h1>")
});

app.listen(3000, function(){
	console.log("Server started on port 3000.");
});