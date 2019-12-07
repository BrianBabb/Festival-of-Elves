// Import MySQL connection.
var dbConnection = require("./connection.js");

var orm = {
    
    create: function (tableInput, userEmail, password , cb) {
        dbConnection.query('INSERT INTO ' + tableInput + ' SET ?',
        {
            email: userEmail,
            password: password,
        },
        function (err, queryResult) {
            if (err) {
                console.log('orm error =' + err);
                throw err;
            }
             console.log('orm create successful ' + queryResult);
            cb(queryResult);
        });
    },

    getUserDetails: function(tableInput, userEmail, cb) {
        //dbConnection.query('DELETE FROM '+tableInput+' WHERE id= '+id+';', function(err,result){
        console.log('getuserDetails orm userEmail= '+ userEmail);
    
        dbConnection.query("select * from user WHERE email = '" +  userEmail +"'" , 
        function (err, queryResult) {
            if (err) {
                console.log('getUserDetails orm error =' + err);
                throw err;
            }
             console.log('orm all successful ' + queryResult[0]);
             console.log('orm all successful ' + queryResult[0].email);
            cb(queryResult);
        });
    },
    
};
// Export the orm object for the model (burger.js).
module.exports = orm;