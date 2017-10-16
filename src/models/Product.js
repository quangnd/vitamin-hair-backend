//Use bookshelf here
//https://www.npmjs.com/package/bookshelf
var bookshelf = require('../tools/bookShelfConfig').bookshelf;

/*
- hasTimestamps: true will enable auto update created_at and updated_at
*/
var Product = bookshelf.Model.extend({
  tableName: 'products',
  hasTimestamps: true,

  initialize: function () {
  }
});

module.exports = Product;
