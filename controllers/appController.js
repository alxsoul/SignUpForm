
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports = function(app){

  app.get("/modelTest", function(req, res){
    res.render("myView");
  });

  app.post("/modelTest",urlencodedParser, function(req, res){
    var userName = req.body.name;
    var userEmail = req.body.email;
    res.render("res", {userName : userName, userEmail : userEmail});
  })

}
