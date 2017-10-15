var Model = require('../models/User');
const bcrypt = require('bcrypt');

var login = function(req, rep) {
    var data = req.payload;
    new Model.User().where('email', data.email).fetch()
        .then(function (user) {
            if (user) {
                bcrypt.compare(data.password, user.toJSON().password, function (err, res) {
                   if(res) {
                       rep(user);
                   } else {
                       rep({ jsondata: "NONE" });
                   }
                });
            } else {
                rep({ jsondata: "NONE" })
            }
        }).catch(function (error) {
            rep({ error });
        });

}
var createUser = function(req, rep) {
    let user = new Model.User();
    
}

var updateUser = function(req, rep) {
    new Model.User().where('id', 1).fetch()
        .then(function (users) {
            if (users) {
                bcrypt.hash('123456', 10, function (err, hash) {
                    var params = { password: hash };
                    users.save(params, {
                        method: 'update',
                        patch: true
                    });
                });
                rep({ users });
            }
        }).catch(function (error) {
            rep({ error });
        });
}

var getAllUsers = function (req, reply) {
    new Model.User().where('id', 1).fetch()
        .then(function (users) {
            reply({ users });
        }).catch(function (error) {
            reply({ error });
        });
}

module.exports = {
    getAllUsers: getAllUsers,
    updateUser: updateUser,
    login: login
}