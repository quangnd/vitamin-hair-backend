'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var user = require('./controllers/user');
var Model = require('./models/User');

var routeConfig = {
    state: {
        parse: false, // parse and store in request.state
        failAction: 'ignore' // may also be 'ignore' or 'log'
    }
};
var routes = [{
    method: 'POST',
    path: '/login',
    handler: function handler(request, reply) {
        user.login(request, reply);
    },
    config: routeConfig
}, {
    method: 'GET',
    path: '/users',
    handler: function handler(request, reply) {
        user.getAllUsers(request, reply);
    },
    config: routeConfig
}, {
    method: 'POST',
    path: '/users',
    handler: function handler(request, reply) {
        user.updateUser(request, reply);
    },
    config: routeConfig
}];
//routes.push(listRoute);

exports.default = routes;