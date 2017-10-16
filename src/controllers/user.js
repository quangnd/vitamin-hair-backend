import generateToken from '../utils/auth';
var User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * POST /login
 * Sign in with email and password
 */
var loginPost = function (req, rep) {
  var data = req.payload;

  new User().where('email', data.email).fetch()
    .then(function (user) {
      if (!user) {
        return rep({ msg: `The email address ${data.email} is not associated with any account. Double-check your email address and try again.` }).code(401);
      }
      user.comparePassword(data.password, function (err, isMatch) {
        if (!isMatch) {
          return rep({ msg: 'Invalid email or password' }).code(401);
        }

        rep({ token: generateToken(user), user: user.toJSON() });
      });
    }).catch(function (error) {
      rep({ error });
    });

}

/**
 * POST /createUser
 * Create new user with basic info
 */
var signupPost = function (req, rep) {
  //TODO: Need validate request here
  var data = req.payload;

  new User({
    name: data.name,
    email: data.email,
    password: data.password,
    phone_number: data.phone_number,
    referral_key: data.referral_key
  }).save()
    .then(function (user) {
      rep({ token: generateToken(user) });
    })
    .catch(function (err) {
      rep({ err });
    });
}

/**
 * PUT /account
 * Update profile information OR change password.
 */
var accountPut = function (req, rep) {
  //TODO: validate request

};


/**
 * DELETE /account
 */
var accountDelete = function (req, rep) {
  new User({ id: req.payload.id }).destroy().then(function (user) {
    rep({ msg: 'Your account has been permanently deleted.' });
  });
};

/**
 * Get /account/id
 */
var accountGet = function (req, rep) {
  var userId = req.params.id;
  new User().where('id', userId).fetch()
    .then(function (user) {
      rep({ user });
    }).catch(function (error) {
      rep({ error });
    });
}

/**
* This function is used for internal using
*/
var validateUser = function (decoded, request, cb) {
  new User().where('id', decoded.id).fetch()
    .then(function (user) {
      if (!user) {
        return cb(null, false);
      }
      return cb(null, true);
    }).catch(function (error) {
      console.log({ error });
    });
}

module.exports = {
  getById: accountGet,
  update: accountPut,
  login: loginPost,
  signup: signupPost,
  delete: accountDelete,
  validateUser: validateUser,
}
