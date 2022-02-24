//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.post("/", (req, res) =>{
	console.log("Posted!");
	console.log(req.body);
	var firstName = req.body.fname;
	var lastName = req.body.lname;
	var email = req.body.email;
});

app.listen(3000, ()=>{
	console.log("Server is running on port 3000.");
});

// api key 4360454008885ccfcf29c5207686c2c8-us14
// unique id 935b43219e