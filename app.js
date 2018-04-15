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
app.listen(3000, function(){
    console.log("NOW we're actually listening to port 3000. This is because app.listen is an asynchronous function, meaning that it provides a callback function that gets called when it has done its job (i.e. listening to port 3000 in this case). The callback function is the one we're in right now.");
})
console.log("now listening to port 3000 (not correct since this code executes before app.listen's callback function.)")
// Check this for more info about async vs sync functions: https://www.youtube.com/watch?v=YxWMxJONp7E&list=PL4cUxeGkcC9jAhrjtZ9U93UMIhnCc44MH