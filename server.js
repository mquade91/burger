var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var port = process.env.PORT || 8080;

var app = express();

//still getting no engine
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//getting the routes from burger controller
var routes = require("./controllers/burgersController.js");

//now that we have the routes we tell server.js what to do with it
app.use("/", routes);

//Not sure where this is coming from
//app.use(methodOverride('_method'));



app.listen(port);
console.log("App is listening on port: " + port);