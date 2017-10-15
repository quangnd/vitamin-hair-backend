'use strict';

var Model = require('./../models/User');

var getAllUsers = function getAllUsers() {
    new Model.User().fetch().then(function (users) {
        console.log(users);
        return users;
    }).catch(function (error) {
        return error;
    });
};

module.exports = {
    getAllUsers: getAllUsers
};