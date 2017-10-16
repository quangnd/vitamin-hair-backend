const jwt = require('jsonwebtoken');
require('dotenv').load();

const generateToken = function(user) {
  // just testing- we can add exp time later
  var payload = {
    id: user.id,
    name: user.name
  };
  return jwt.sign(payload, process.env.TOKEN_SECRET);
};

export default generateToken;
