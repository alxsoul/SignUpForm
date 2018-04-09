var express = require("express");
var app = express();
var controller = require("./controllers/appController.js");


//set up view engine
app.set("view engine", "ejs")

//static files
app.use(express.static("./public"))

//fire controller
controller(app);

//listen to port
app.listen(3000)
console.log("now listening to port 3000")
