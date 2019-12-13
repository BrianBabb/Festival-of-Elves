var express = require("express");
var router1 = express.Router();

/*uncomment  when using sequalize */
//var db = require("../models");
var orm = require("../config/orm");
var emailId = "";
var child1 = "";
var child2 = "";
var elf1 = "";
var elf2 = "";
router1.post("/registerUser", function(req, res) {
  // console.log("inside post");
  emailId = req.body.userEmail;
  var userPwd = req.body.password;
  //console.log(emailId);
  orm.registerUser("user", emailId, userPwd, function() {
    res.render("profile");
  });
});

router1.post("/loginAuth", function(req, res) {
  console.log("in loginAuth" + req.body);
  var emailId = req.body.loginEmail;
  var userPwd = req.body.password;
  // console.log("emailId= " + emailId);
  //console.log("userPwd= " + userPwd);
  res.render("calendar");
  //get user data
  orm.getUserId(emailId, function(result) {
    //db.User.getUserDetails(emailId, function(result) {
    console.log("login query response== " + result[0].email);
    //validation
    if (result[0].email === emailId && result[0].password === userPwd) {
      userId = result[0].id;
      //authentication successfil
      //do whatever
      //orm.getChildAndElfNames(userId)
      //this res.render will go in callback from getchildandelfnames and the data object will be the same as the one above in register
      res.render("secrets");
    } else {
      //auth failed///do something else
      console.log("login failed");
    }
  });
});

router1.post("/familyProfile", function(req, res) {
  // console.log("inside Fam Profile");
  firstName = req.body.firstName;
  lastName = req.body.lastName;
  child1 = req.body.child1;
  child2 = req.body.child2;
  elf1 = req.body.elf1;
  elf2 = req.body.elf2;
  //todo
  /*javascript to get all check values from the check box
  and push into array. later, use the array to loop and call orm.creatElves. we will pass array[index] value which will be elves name to pass as parm to createElves method*/
  orm.getUserId(emailId, function(result) {
    userId = result[0].id;
    //  console.log("su- getUserId = " + userId);
    orm.createParentProfile(userId, firstName, lastName, function(result) {
      orm.createChildProfile(userId, child1, function(result) {
        //   console.log("child one name" + child1);
      });
      orm.createChildProfile(userId, child2, function(result) {
        //  console.log("child two name" + child2);

        orm.getUserChildren(userId, function(result) {
          orm.createElves(result[0].childId, elf1, function(result) {
            //   console.log("elf one name" + elf1);
          });
          orm.createElves(result[1].childId, elf2, function(result) {
            //    console.log("elf two name" + elf2);

            res.redirect('/elvCal');
          });
        });
      });
    });
  });
});
router1.get("/elvCal", function(req, res) {
  res.render("calendar", {
    firstchild: child1,
    secondchild: child2,
    firstelf: elf1,
    secondelf: elf2
  });
});
// register user process via sequalize
/*db.User.create(emailId, userPwd, function(result) {
    res.redirect("/");
  });*/

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

/**
 * When the user/client requests the /calendar route we return the html markup for the calendar
 *
 */
router1.get("/calendar", function(req, res) {
  console.log("i m in calendar");
  console.log("child1= " + child1 + ".." + child2);
  // document.getElementById("child1").value = result[0].childName;
  res.render("calendar", {
    firstchild: child1,
    secondchild: child2,
    firstelf: elf1,
    secondelf: elf2
  });
});

module.exports = router1;
// res.render("calendar", { firstchild: child1 });
// res.render("calendar", { secondchild: child2 });
// res.render("calendar", { firstelf: elf1 });
// res.render("calendar", { secondelf: elf2 });
