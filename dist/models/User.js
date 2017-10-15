'use strict';

//Use bookshelf here
//https://www.npmjs.com/package/bookshelf
var bookshelf = require('../tools/bookShelfConfig').bookshelf;

var User = bookshelf.Model.extend({
    tableName: 'users'
});

module.exports = {
    User: User
};