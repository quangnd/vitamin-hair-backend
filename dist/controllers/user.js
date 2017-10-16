'use strict';

var Model = require('../models/User');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var testUser = {
  1: {
    id: 1,
    name: 'quangnd'
  }
};

function generateToken(user) {
  // just testing- we can add exp time later
  var payload = {
    id: user.id,
    name: user.name
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET);
}

var token = generateToken(testUser[1]);

var login = function login(req, rep) {
  var data = req.payload;
  new Model.User().where('email', data.email).fetch().then(function (user) {
    if (user) {
      bcrypt.compare(data.password, user.toJSON().password, function (err, res) {
        if (res) {
          rep(user);
        } else {
          rep({ jsondata: "NONE" });
        }
      });
    } else {
      rep({ jsondata: "NONE" });
    }
  }).catch(function (error) {
    rep({ error: error });
  });
};
var createUser = function createUser(req, rep) {
  var user = new Model.User();
};

var updateUser = function updateUser(req, rep) {
  new Model.User().where('id', 1).fetch().then(function (users) {
    if (users) {
      bcrypt.hash('123456', 10, function (err, hash) {
        var params = { password: hash };
        users.save(params, {
          method: 'update',
          patch: true
        });
      });
      rep({ users: users });
    }
  }).catch(function (error) {
    rep({ error: error });
  });
};

var getAllUsers = function getAllUsers(req, reply) {
  new Model.User().where('id', 1).fetch().then(function (users) {
    reply({ users: users });
  }).catch(function (error) {
    reply({ error: error });
  });
};

module.exports = {
  getAllUsers: getAllUsers,
  updateUser: updateUser,
  login: login
};