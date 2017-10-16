
require('babel-core/register');
const user = require('./controllers/user');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const Hapi = require('hapi');
const Good = require('good');

import { chalkProcessing } from './tools/chalkConfig';
import routes from './routes';

dotenv.load();

const server = new Hapi.Server();

if (process.env.NODE_ENV === 'production') {
  server.connection({ port: process.env.PORT || 3001 });
} else {
  server.connection({ port: process.env.PORT || 3001, host: 'localhost' });
}

server.register(require('hapi-auth-jwt2'), function (err) {
  if (err) {
    console.log(err);
  }

  server.auth.strategy('jwt', 'jwt',
    {
      key: process.env.TOKEN_SECRET,
      validateFunc: user.validateUser,
      verifyOptions: { algorithms: ['HS256'] }
    });

  server.auth.default('jwt');
  server.route(routes);
});

server.register({
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*'
        }]
      }, {
        module: 'good-console'
      }, 'stdout']
    }
  }
}, (err) => {

  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.start((err) => {
    if (err) {
      throw err;
    }
    server.log('info', chalkProcessing(`Server running at : ${server.info.uri}`));
  });
});
