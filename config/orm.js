/* eslint-disable prettier/prettier */
// Import MySQL connection.
var dbConnection = require("./connection.js");

var orm = {
  // eslint-disable-next-line prettier/prettier

  registerUser: function (tableInput, userEmail, password, cb) {
    dbConnection.query(
      "INSERT  INTO " + tableInput + " SET ?",
      {
        email: userEmail,
        password: password
      },
      function (err, queryResult) {
        if (err) {
         console.log("orm registerUser =" + err);
          // throw err;
          cb(err);
          
        } else {
          console.log("orm registerUser =" + queryResult);
          cb(queryResult);
        }
        
      }
    );
  },

  getUserId: function (userEmail, cb) {
    //dbConnection.query('DELETE FROM '+tableInput+' WHERE id= '+id+';', function(err,result){
    // console.log("getuserDetails orm userEmail= " + userEmail);
    var user = "select * from user WHERE email = '" + userEmail + "'";
    dbConnection.query(
      user,
      function (err, queryResult) {
        if (err) {
          console.log("getUserId orm error =" + err);
          //throw err;
          cb(err);
        }
        console.log("getUserId orm success  " + queryResult);
        cb(queryResult);
      }
    );
  },

  createParentProfile: function (id, firstName, lastName, cb) {
    dbConnection.query(
      "INSERT INTO parentdetail SET ?",
      {
        parentId: id,
        firstName: firstName,
        lastName: lastName
      },
      function (err, queryResult) {
        if (err) {
          console.log("createParentProfile orm error =" + err);
          //throw err;
          cb(err);
        }
        console.log("orm createParentProfile successful " + queryResult);
        cb(queryResult);
      }
    );
  },
  /*createChildProfile: function(id, child1, cb) {
    dbConnection.query(
      "INSERT INTO childdetail SET ?",
      {
        parentId: id,
        childName: child1
      },
      function(err, queryResult) {
        if (err) {
          //throw err;
          console.log("orm createChildProfile ERROR " + err);
          cb(err);
        }
        console.log("orm createChildProfile success " + queryResult);
        cb(queryResult);
      }
    );
  },*/

 
  createChildProfile: function(childArray, cb) {
    var stmt = "INSERT INTO childdetail (parentId, childName ) VALUES ?";
    dbConnection.query(stmt, [childArray] ,
      function(err, queryResult) {
        if (err) {
          //throw err;
          console.log("orm createChildProfile ERROR " + err);
          cb(err);
        }
        console.log("orm createChildProfile success " + queryResult);
        cb(queryResult);
      }
    );
  },

  /*createElves: function(chidId, elvesName, cb) {
    dbConnection.query(
      "INSERT INTO elves SET ?",
      {
        childId: chidId,
        elvesName: elvesName
    
      },
      function(err, queryResult) {
        if (err) {
          console.log("orm createElve error =" + err);
          //throw err;
          cb(err);
        }
        console.log("orm createElve error =" + queryResult);
        cb(queryResult);
      }
    );
  },*/

  createElves: function(elvesArray, cb) {
    dbConnection.query(
      "INSERT INTO elves (childId, elvesName) VALUES ?",
      [elvesArray] ,
      function(err, queryResult) {
        if (err) {
          console.log("orm createElve error =" + err);
          //throw err;
          cb(err);
        }
        console.log("orm createElve error =" + queryResult);
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
          console.log("getUserChildren orm error =" + err);
          //throw err;
          cb(err);
        }
        console.log("getUserChildren orm error =" + queryResult);
        cb(queryResult);
      }
    );
  },
  getChildDetails: function (id, cb) {
    var query = 
    "SELECT child.childName, elf.elvesName from  childdetail child, elves elf where child.parentId ='" + id +
    "'" + "and child.childId = elf.childId";
    dbConnection.query(query, function (err, queryResult) {
      if (err) {
        console.log("orm getChildDetails =" + err);
        //throw err;
        cb(err);
      }
      console.log("orm getChildDetails =" + queryResult);
      cb(queryResult);
    }
    );

  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
