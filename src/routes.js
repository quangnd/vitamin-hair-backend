var user = require('./controllers/user');
var Model = require('./models/User');

const routeConfig = {
  state: {
    parse: false, // parse and store in request.state
    failAction: 'ignore' // may also be 'ignore' or 'log'
  }
}

const routeConfigIgnoreAuth = {
  state: {
    parse: false, // parse and store in request.state
      failAction: 'ignore' // may also be 'ignore' or 'log'
  },
  auth: false
}

const routes = [
  {
    method: 'POST',
    path: '/login',
    handler: function (request, reply) {
      user.login(request, reply);
    },
    config: routeConfigIgnoreAuth
  },
  {
    method: 'GET',
    path: '/user/{id}',
    handler: function (request, reply) {
      user.getById(request, reply);
    },
    config: routeConfig
  },
  {
    method: 'PUT',
    path: '/user',
    handler: function (request, reply) {
      user.update(request, reply);
    },
    config: routeConfig
  },
  {
    method: 'POST',
    path: '/signUp',
    handler: function (request, reply) {
      user.signup(request, reply);
    },
    config: routeConfigIgnoreAuth
  },
  {
    method: 'GET',
    path: '/forgotpassword/{email}',
    handler: function (request, reply) {
      user.forgotPassword(request, reply);
    },
    config: routeConfigIgnoreAuth
  },
]
//routes.push(listRoute);

export default routes;
