'use strict';

const Pages = require('./handlers/pages');
const Assets = require('./handlers/assets');
const Actions = require('./handlers/actions');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: Pages.home
    },{
        method: 'GET',
        path: '/recipes/{id}',
        handler: Pages.viewRecipe
    },{
        method: 'GET',
        path: '/{params*}',
        handler: Assets.servePublicDirecory
    },{
        method: 'GET',
        path: '/setName/{name}',
        handler: function (request, reply) {
            request.cookieAuth.set({
                name: encodeURIComponent(request.params.name)
            });
            reply('Name set!');
        }
    },{
        method: 'GET',
        path: '/getName',
        handler: function (request, reply) {
            const name = request.auth.credentials.name;
            reply('Hello there ' + name);
        }
    },{
        method: 'GET',
        path: '/login',
        handler: Pages.login
    },{
        method: 'POST',
        path: '/login',
        config: {
            payload: {
                output: 'data'
            }
        },
        handler: Actions.login
    }
];