var express = require("express");
var router1 = express.Router();
//var elves = require('../models/elves');
var db = require("../models");

router1.post("/register", function(req, res) {
  console.log("inside post");
  var emailId = req.body.userEmail;
  var userPwd = req.body.password;
  console.log(emailId);
  // register user process
  db.User.create(emailId, userPwd, function(result) {
    res.redirect("/");
  });
});


router1.get("/",function(req,res){
  res.render("home");
});
  
router1.post("/loginAuth",function(req,res){
  console.log('in loginAuth' + req.body);
  var emailId = req.body.loginEmail;
  var userPwd = req.body.password;
  console.log('emailId= ' + emailId);
  console.log('userPwd= ' + userPwd);
  //get user data 
  // orm.getUserDetails('user',emailId,function(result){
  elves.getUserDetails(emailId,function(result) {
    console.log('login query response== ' + result[0].email);
    //validation
    if(result[0].email === emailId && result[0].password === userPwd) {
      //authentication successfil
      //do whatever
      res.render("secrets");
    }
    else {
      //auth failed///do something else
      console.log('login failed');
    }
       
  });
    
});

router1.get("/login",function(req,res){
  res.render("login");
    
});
  
router1.get("/register",function(req,res){
  console.log('this is register clicked on landing page');
  res.render("register");
});
  
  
module.exports = router1;
