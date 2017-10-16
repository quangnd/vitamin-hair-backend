var Product = require('../models/Product');

/**
 * getProductList
 */
var getProductList = function(req, rep) {
  new Product().fetchAll()
    .then(function(products) {
      rep({ products }).code(200);
    })
    .catch(function(err) {
      rep({ err }).code(401);
    })
}

module.exports = {
  getProductList: getProductList
}
