const routes = [];
var user = require('./controllers/user');
var Model = require('./models/User');

const routeConfig = {
    state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
    }
}
routes.push({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {
      user.getAllUsers(request, reply);
    },
    config: routeConfig
});

export default routes;
