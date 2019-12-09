/* eslint-disable prettier/prettier */
// Import MySQL connection.
var dbConnection = require("./connection.js");

var orm = {
  // eslint-disable-next-line prettier/prettier

  create: function(tableInput, userEmail, password, cb) {
    dbConnection.query(
      "INSERT INTO " + tableInput + " SET ?",
      {
        email: userEmail,
        password: password
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

  getUserDetails: function(tableInput, userEmail, cb) {
    //dbConnection.query('DELETE FROM '+tableInput+' WHERE id= '+id+';', function(err,result){
    console.log("getuserDetails orm userEmail= " + userEmail);

    dbConnection.query(
      "select * from user WHERE email = '" + userEmail + "'",
      function(err, queryResult) {
        if (err) {
          console.log("getUserDetails orm error =" + err);
          throw err;
        }
        console.log("orm all successful " + queryResult[0]);
        console.log("orm all successful " + queryResult[0].email);
        cb(queryResult);
      }
    );
  },
  createParentProfile: function(id, firstName, lastName, cb) {
    console.log("createProfile -id= " +id );
    console.log("createProfile -firstName= " +firstName );
    console.log("createProfile -lastName= " + lastName );
    dbConnection.query(
      "INSERT INTO parentdetail SET ?",
      {
        parentId: id,
        firstName: firstName,
        lastName: lastName
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
  createChildProfile: function(id, child1, cb) {
    console.log("createProfile -id= " +id );
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
  getChildDetails: function(tableInput, childName, cb) {
    //dbConnection.query('DELETE FROM '+tableInput+' WHERE id= '+id+';', function(err,result){
    console.log("getChildDetails orm childName= " + childName);

    dbConnection.query(
      "select * from user WHERE childName = '" + childName + "'",
      function(err, queryResult) {
        if (err) {
          console.log("getChildDetails orm error =" + err);
          throw err;
        }
        console.log("orm all successful " + queryResult[0]);
        console.log("orm all successful " + queryResult[0].childName);
        cb(queryResult);
      }
    );
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
