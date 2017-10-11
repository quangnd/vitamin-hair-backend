
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  var tableName = 'users';
  var rows = [
    // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
    {
      name: 'Le Anh Tuan',
      email: 'tuanleanh1994@gmail.com',
      password: 'anhtuan',
      address: 'Hà Nội',
      phone_number: '0984345062',
      facebook_id: '',
      referal_key: 'tuanle',
      credit: 0
    },

  ];

  return knex(tableName)
    // Empty the table (DELETE)
    .del()
    .then(function () {
      return knex.insert(rows).into(tableName);
    });
};
