
require('babel-core/register');
import {chalkProcessing} from './tools/chalkConfig';
import routes from './src/routes';

const Hapi = require('hapi');
const Good = require('good');
const server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3000, host: 'localhost' });

const routeConfig = {
  state: {
    parse: false, // parse and store in request.state
    failAction: 'ignore' // may also be 'ignore' or 'log'
  }
}

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
      reply('Hello, world!');
  },
  config: routeConfig
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
    server.log('info', chalkProcessing(`Server running at: ${server.info.uri}`));
  });
});
