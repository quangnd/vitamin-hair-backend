var Model = require('../models/User');

var createUser = function(req, rep) {
    let user = new Model.User();
    
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
    getAllUsers: getAllUsers
}