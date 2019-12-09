var express = require("express");
var router1 = express.Router();

/*uncomment  when using sequalize */
//var db = require("../models");
var orm = require("../config/orm");
var userId;
router1.post("/register", function(req, res) {
  console.log("inside post");
  var emailId = req.body.userEmail;
  var userPwd = req.body.password;
  console.log(emailId);

  orm.create("user", emailId, userPwd, function(result) {
    res.redirect("/");
  });

  // register user process via sequalize
  /*db.User.create(emailId, userPwd, function(result) {
    res.redirect("/");
  });*/
});

router1.post("/loginAuth", function(req, res) {
  console.log("in loginAuth" + req.body);
  var emailId = req.body.loginEmail;
  var userPwd = req.body.password;
  console.log("emailId= " + emailId);
  console.log("userPwd= " + userPwd);
  //get user data
  orm.getUserDetails("user", emailId, function(result) {
    //db.User.getUserDetails(emailId, function(result) {
    console.log("login query response== " + result[0].email);
    //validation
    if (result[0].email === emailId && result[0].password === userPwd) {
      userId = result[0].id;
      //authentication successfil
      //do whatever
      res.render("profile");
    } else {
      //auth failed///do something else
      console.log("login failed");
    }
  });
});

router1.post("/familyProfile", function(req, res) {
  console.log("inside Fam Profile");
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var child1 = req.body.child1;
  var child2 = req.body.child2;

  //console.log(emailId);

  orm.createParentProfile(userId, firstName, lastName, function(result) {
    orm.createChildProfile(userId, child1, function(result) {
      //res.redirect("secrets");
    });
    orm.createChildProfile(userId, child2, function(result) {
      //res.redirect("secrets");
    });
    res.render("secrets");
  });

  // register user process via sequalize
  /*db.User.create(emailId, userPwd, function(result) {
    res.redirect("/");
  });*/
});

router1.get("/", function(req, res) {
  res.render("home");
});

router1.get("/login", function(req, res) {
  res.render("login");
});

router1.get("/register", function(req, res) {
  console.log("this is register clicked on landing page");
  res.render("register");
});

module.exports = router1;
