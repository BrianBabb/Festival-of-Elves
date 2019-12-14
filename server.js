//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
 var exphbs = require("express-handlebars");
const ejs = require("ejs");
const session = require('express-session');
const passport = require("passport");


const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
//app.set("view engine", "handlebars");
//app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});

var routes = require('./controllers/elves_controller.js');
app.use(routes);
