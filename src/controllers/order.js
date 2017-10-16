var Product = require('../models/Product');
var Order = require('../models/Order');
var OrderDetail = require('../models/OrderDetail');
var OrderAddress = require('../models/OrderAddress');

var order = function(req, rep) {
  var data = req.payload;
  new Order({
    user_id: data.user_id,
    status: 0
  })
  .save().then(function(order) {
    console.log(order);
  })
  .catch(function(err) {
    rep({ err });
  })
}

module.exports = {
  order: order
}
