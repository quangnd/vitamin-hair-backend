
require('babel-core/register');
import {chalkProcessing} from './tools/chalkConfig';
import routes from './routes';


const Hapi = require('hapi');
const Good = require('good');
const server = new Hapi.Server();

if (process.env.NODE_ENV === 'production') {
  server.connection({ port: process.env.PORT || 3001 });
} else {
  server.connection({ port: process.env.PORT || 3001, host: 'localhost' });
}

server.route(routes);

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
