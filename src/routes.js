var user = require('./controllers/user');
var Model = require('./models/User');

const routeConfig = {
  state: {
    parse: false, // parse and store in request.state
    failAction: 'ignore' // may also be 'ignore' or 'log'
  }
}
const routes = [
  {
    method: 'POST',
    path: '/login',
    handler: function (request, reply) {
      user.login(request, reply);
    },
    config: routeConfig
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: function (request, reply) {
      user.getById(request, reply);
    },
    config: routeConfig
  },
  {
    method: 'POST',
    path: '/users',
    handler: function (request, reply) {
      user.update(request, reply);
    },
    config: routeConfig
  },
  {
    method: 'POST',
    path: '/user',
    handler: function (request, reply) {
      user.signup(request, reply);
    },
    config: routeConfig
  }
]
//routes.push(listRoute);

export default routes;
