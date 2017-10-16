//Use bookshelf here
//https://www.npmjs.com/package/bookshelf
var bookshelf = require('../tools/bookShelfConfig').bookshelf;

/*
- hasTimestamps: true will enable auto update created_at and updated_at
*/
var OrderDetail = bookshelf.Model.extend({
  tableName: 'order_details',
  hasTimestamps: false,

  initialize: function () {
  }
});

module.exports = OrderDetail;
