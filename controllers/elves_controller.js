var express = require("express");
var router1 = express.Router();

/*uncomment  when using sequalize */
//var db = require("../models");
var orm = require("../config/orm");

router1.post("/register", function(req, res) {
  console.log("inside post");
  var emailId = req.body.userEmail;
  var userPwd = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var child1 = req.body.child1;
  var child2 = req.body.child2;
  var elf1 = req.body.elf1;
  var elf2 = req.body.elf2;
  console.log(emailId);

  orm.registerUser("user", emailId, userPwd, function() {
    // res.redirect("/profile");
    orm.getUserId("user", emailId, function(result) {
      userId = result[0].id;
      orm.createParentProfile(
        userId,
        firstName,
        lastName,
        child1,
        child2,
        elf1,
        elf2,
        function() {
          res.render("secrets", {
            user: userId,
            elfOne: elf1,
            elfTwo: elf2,
            childOne: child1,
            childTwo: child2
          });
        }
      );
    });
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
  orm.getUserId("user", emailId, function(result) {
    //db.User.getUserDetails(emailId, function(result) {
    console.log("login query response== " + result[0].email);
    //validation
    if (result[0].email === emailId && result[0].password === userPwd) {
      userId = result[0].id;
      //authentication successfil
      //do whatever
      orm.getChildAndElfNames(userId)
      //this res.render will go in callback from getchildandelfnames and the data object will be the same as the one above in register
      res.render("secrets", { user: userId });
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
  var elf1 = req.body.elf1;
  var elf2 = req.body.elf2;
  //todo
  /*javascript to get all check values from the check box
  and push into array. later, use the array to loop and call orm.creatElves. we will pass array[index] value which will be elves name to pass as parm to createElves method*/

  console.log("familyProfile--> " + emailId);
  orm.getUserId("user", emailId, function(result) {
    userId = result[0].id;
    orm.createParentProfile(
      userId,
      firstName,
      lastName,
      child1,
      child2,
      elf1,
      elf2,
      function() {
        res.render("login");
      }
    );
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
router1.get("/profile", function(req, res) {
  console.log("this is register clicked on landing page");
  res.render("profile");
});
/**
 * When the user/client requests the /calendar route we return the html markup for the calendar
 *
 */
router1.get("/calendar", function(req, res) {
  // document.getElementById("child1").value = result[0].childName;
  res.render("calendar");
});
/**
 * When the user/client then requests the /child-data route we return data related to the child
 *
 */

router1.get("/child-data/1", function(req, res) {
  // var userId = req.params.userId;

  orm.getChildName(userId, function(result) {
    //console.log("this is calendar page result= " + result[0].childName);
    // console.log("this is calendar page result= " + result[1].childName);
    childName1 = result[0].childName;
    // childName2 = result[1].childName;
    // elfName1 = result[0].elvesName;
    // elfName2 = result[1].elvesName;
    res.json(childName1);
    // res.json(childName2);
    // res.json(elfName1);
    // res.json(elfName2);
  });
  orm.getChildName(userId, function(result) {
    //console.log("this is calendar page result= " + result[0].childName);
    // console.log("this is calendar page result= " + result[1].childName);
    // childName1 = result[0].childName;
    childName2 = result[1].childName;
    // elfName1 = result[0].elvesName;
    // elfName2 = result[1].elvesName;
    // res.json(childName1);
    res.json(childName2);
    // res.json(elfName1);
    // res.json(elfName2);
  });
});
// router1.get("/modal", function(req, res) {
//   console.log("this is modal page");
//   userId = result[0].id;
//   orm.getChildName("childdetail", userId, function() {
//     console.log("inside controller get child" + Id);

//   });
//   res.render("modal");
// });

module.exports = router1;
