//Use bookshelf here
//https://www.npmjs.com/package/bookshelf
var bookshelf = require('../tools/bookShelfConfig').bookshelf;

/*
- hasTimestamps: true will enable auto update created_at and updated_at
*/
var Order = bookshelf.Model.extend({
  tableName: 'orders',
  hasTimestamps: true,

  initialize: function () {
  }
});

module.exports = Order;
