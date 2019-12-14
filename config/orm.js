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

  getUserId: function (userEmail, cb) {
    //dbConnection.query('DELETE FROM '+tableInput+' WHERE id= '+id+';', function(err,result){
    // console.log("getuserDetails orm userEmail= " + userEmail);
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

  createParentProfile: function (id, firstName, lastName, cb) {
  //  console.log("createProfile -id= " + id);
  //  console.log("createProfile -firstName= " + firstName);
  //  console.log("createProfile -lastName= " + lastName);
    dbConnection.query(
      "INSERT INTO parentdetail SET ?",
      {
        parentId: id,
        firstName: firstName,
        lastName: lastName,
        // childOneName: childOne,
        // childTwoName: childTwo,
        // elfOneName: elfOne,
        // elfTwoName: elfTwo
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
  createChildProfile: function(id, child1, cb) {
    // console.log("createProfile -id= " +id );
    dbConnection.query(
      "INSERT INTO childdetail SET ?",
      {
        parentId: id,
        childName: child1
    
      },
      function(err, queryResult) {
        if (err) {
          console.log("orm error =" + err);
          throw err;
        }
        console.log("orm create successful " + queryResult);
        cb(queryResult);
      }
    );
  },
  createElves: function(chidId, elvesName, cb) {
    dbConnection.query(
      "INSERT INTO elves SET ?",
      {
        childId: chidId,
        elvesName: elvesName
    
      },
      function(err, queryResult) {
        if (err) {
          console.log("orm createElve error =" + err);
          throw err;
        }
        console.log("orm createElve successful " + queryResult);
        cb(queryResult);
      }
    );
  },
  getUserChildren: function ( userId, cb) {
    var child = "select * from childdetail WHERE parentId = '" + userId + "'";
    dbConnection.query(
      child,
      function (err, queryResult) {
        if (err) {
          console.log("getUserDetails orm error =" + err);
          throw err;
        }
        console.log("getUserChildren orm all successful " + queryResult);
        //console.log("getUserId orm all successful " + queryResult[0]);
        //console.log("orm all successful " + queryResult[0].email);
        cb(queryResult);
      }
    );
  },
  getChildDetails: function (id, cb) {
    console.log("orm getChildDetails" + id);
    /*
    "SELECT child.childName, elf.elvesName from  childdetail child, elves elf where child.parentId = '" + id + "'"
    */
    var query = 
    "SELECT child.childName, elf.elvesName from  childdetail child, elves elf where child.parentId ='" + id +
    "'" + "and child.childId = elf.childId";
    dbConnection.query(query, function (err, queryResult) {
      if (err) {
        console.log("orm error =" + err);
        throw err;
      }
      console.log("orm getChildDetails successful " + queryResult);
      cb(queryResult);
    }
    );

  }



};

// Export the orm object for the model (burger.js).
module.exports = orm;
