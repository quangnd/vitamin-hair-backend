'use strict';

var _chalkConfig = require('./tools/chalkConfig');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-core/register');


var Hapi = require('hapi');
var Good = require('good');
var server = new Hapi.Server();

server.connection({ port: process.env.PORT || 3001 });

var routeConfig = {
  state: {
    parse: false, // parse and store in request.state
    failAction: 'ignore' // may also be 'ignore' or 'log'
  }
};

server.route({
  method: 'GET',
  path: '/',
  handler: function handler(request, reply) {
    reply({ jsondata: "done" });
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
}, function (err) {

  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.start(function (err) {
    if (err) {
      throw err;
    }
    server.log('info', (0, _chalkConfig.chalkProcessing)('Server running at : ' + server.info.uri));
  });
});