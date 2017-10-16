
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  // Default pass is 123456
  var tableName = 'products';
  var rows = [
    // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
    {
      name: 'Sản phẩm tiêu chuẩn 10ml',
      price: 0,
      description: 'Hàng dùng thử',
      images: 'image1.jpg',
      is_trial: 1
    },

  ];

  return knex(tableName)
    // Empty the table (DELETE)
    .del()
    .then(function () {
      return knex.insert(rows).into(tableName);
    });
};
