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
  emailId = req.body.userEmail;
  var userPwd = req.body.password;
  //TODO- HANDLE ERROR CONDITION via try/catch ?
  //try {
  orm.registerUser("user", emailId, userPwd, function(result) {
    if (result.code === "ER_DUP_ENTRY") {
      res.render("register", { dupError: true });
    } else {
      res.render("profile");
    }
    /* console.log("i m here message" + data.fieldCount);
      var message =  JSON.stringify(data.fieldCount);
      if(data.changedRows > 0 ) {
        res.render("profile");
      } else {
        console.log('unable to register');
      }
       */
  });
  //} catch (err) {
  //  console.log('inside registeruser elvers controller');
  //}
});

router1.post("/loginAuth", function(req, res) {
  var emailId = req.body.loginEmail;
  var userPwd = req.body.password;
  //get user data
  orm.getUserId(emailId, function(result) {
   // console.log(JSON.stringify(result));
   // check if user exists
    if (
      result.length > 0 &&
      result[0].email === emailId &&
      result[0].password === userPwd
    ) {
      userId = result[0].id;
      orm.getChildDetails(userId, function(result) {
        child1 = result[0].childName;
        child2 = result[1].childName;
        elf1 = result[0].elvesName;
        elf2 = result[1].elvesName;
        res.redirect("/elvCal");
      });

      // res.render("secrets");
    } else {
      // user does not exist in db
      //auth failed///do something else
      res.render("login", {
        loginFailed: true
      });
      console.log("login failed");
    }
  });
});

router1.post("/familyProfile", function(req, res) {
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
    orm.createParentProfile(userId, firstName, lastName, function(result) {
      orm.createChildProfile(userId, child1, function(result) {});
      orm.createChildProfile(userId, child2, function(result) {
        orm.getUserChildren(userId, function(result) {
          orm.createElves(result[0].childId, elf1, function(result) {});
          orm.createElves(result[1].childId, elf2, function(result) {
            res.redirect("/elvCal");
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
  res.render("login", {
    loginFailed: false
  });
});

router1.get("/register", function(req, res) {
  console.log("this is register clicked on landing page");
  res.render("register", { dupError: false });
});

/**
 * When the user/client requests the /calendar route we return the html markup for the calendar
 *
 */
router1.get("/calendar", function(req, res) {
  res.render("calendar", {
    firstchild: child1,
    secondchild: child2,
    firstelf: elf1,
    secondelf: elf2
  });
});
router1.get("/logout", function(req, res) {
  res.render("home");
});

router1.get("/kids", function(req, res) {
  res.render("kids", {
    firstchild: child1,
    secondchild: child2,
    firstelf: elf1,
    secondelf: elf2
  });
});

module.exports = router1;
