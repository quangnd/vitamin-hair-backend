//Use bookshelf here
//https://www.npmjs.com/package/bookshelf
var bookshelf = require('../tools/bookShelfConfig');

var User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true    
});

var Users = bookshelf.Collection.extend({
    model: User
})
// class Users extends bookshelf.Model {
//     get tableName() {
//         return 'users';
//     }
    
//     get hasTimestamps() {
//         return true;
//     }

// }

module.exports = {
    User: User,
    Users: Users
}