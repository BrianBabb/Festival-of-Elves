/* eslint-disable prettier/prettier */
// Import MySQL connection.
var dbConnection = require("./connection.js");

var orm = {
  // eslint-disable-next-line prettier/prettier

  registerUser: function (tableInput, userEmail, password, cb) {
    dbConnection.query(
      "INSERT INTO " + tableInput + " SET ?",
      {
        email: userEmail,
        password: password
      },
      function (err, queryResult) {
        if (err) {
          console.log("orm error =" + err);
          throw err;
        }
        console.log(queryResult);
        cb(queryResult);
      }
    );
  },

  getUserId: function (tableInput, userEmail, cb) {
    //dbConnection.query('DELETE FROM '+tableInput+' WHERE id= '+id+';', function(err,result){
    console.log("getuserDetails orm userEmail= " + userEmail);
    var child = "select * from user WHERE email = '" + userEmail + "'";
    dbConnection.query(
      child,
      function (err, queryResult) {
        if (err) {
          console.log("getUserDetails orm error =" + err);
          throw err;
        }
        console.log("getUserId orm all successful " + queryResult);
        //console.log("getUserId orm all successful " + queryResult[0]);
        //console.log("orm all successful " + queryResult[0].email);
        cb(queryResult);
      }
    );
  },

  createParentProfile: function (id, firstName, lastName, childOne, childTwo, elfOne, elfTwo, cb) {
    console.log("createProfile -id= " + id);
    console.log("createProfile -firstName= " + firstName);
    console.log("createProfile -lastName= " + lastName);
    dbConnection.query(
      "INSERT INTO parentdetail SET ?",
      {
        parentId: id,
        firstName: firstName,
        lastName: lastName,
        childOneName: childOne,
        childTwoName: childTwo,
        elfOneName: elfOne,
        elfTwoName: elfTwo
      },
      function (err, queryResult) {
        if (err) {
          console.log("orm error =" + err);
          throw err;
        }
        console.log("orm createParentProfile successful " + queryResult);
        cb(queryResult);
      }
    );
  },

  getChildName: function (id, cb) {
    // console.log("getc chikld name" + Id);
    dbConnection.query(

      // SELECT childName from childdetail where parentId =  + id + "'",

      // "SELECT child.childName, elf.elvesName from  childdetail child, elves elf where child.parentId='" + id + "'",

      "SELECT child.childName, elf.elvesName from  childdetail child, elves elf where child.parentId = '" + id + "'",
      

      function (err, queryResult) {
        if (err) {
          console.log("orm error =" + err);
          throw err;
        }
        console.log("orm getChildName successful " + queryResult);
        cb(queryResult);
      }
    );

  }



};

// Export the orm object for the model (burger.js).
module.exports = orm;
