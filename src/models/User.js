//Use bookshelf here
//https://www.npmjs.com/package/bookshelf
const bcrypt = require('bcrypt');
var bookshelf = require('../tools/bookShelfConfig').bookshelf;

/*
- hasTimestamps: true will enable auto update created_at and updated_at
*/
var User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,

  initialize: function() {
    this.on('saving', this.hashPassword, this);
    this.on('creating', this.createReferralKey, this);
  },

  hashPassword: function(model, attrs, options) {
    var password = options.patch ? attrs.password : model.get('password');
    if (!password) { return; }

    return new Promise(function(resolve, reject) {
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          if (options.patch) {
            attrs.password = hash;
          }

          model.set('password', hash);
          resolve();
        });
      });
    });
  },

  comparePassword: function(password, done) {
    var model = this;
    bcrypt.compare(password, model.get('password'), function(err, isMatch) {
      done(err, isMatch);
    });
  },

  createReferralKey: function(model, attrs, options) {
    return new Promise(function(resole, reject) {
      model.set('referral_key', Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5));
      resole();
    })
  }
});

module.exports = User;
