var orm = require('../config/orm.js');

var elves = {

    create: function (userEmail, password, cb) {
        orm.create('user',userEmail , password, function (res) {
            cb(res);
        });
    },

    getUserDetails: function (userEmail, cb) {
        orm.getUserDetails('user',userEmail, function (res) {
            cb(res);
        });
    }

}
module.exports = elves;