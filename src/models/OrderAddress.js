//Use bookshelf here
//https://www.npmjs.com/package/bookshelf
var bookshelf = require('../tools/bookShelfConfig').bookshelf;

/*
- hasTimestamps: true will enable auto update created_at and updated_at
*/
var OrderAddress = bookshelf.Model.extend({
  tableName: 'order_address',
  hasTimestamps: false,

  initialize: function () {
  }
});

module.exports = OrderAddress;
