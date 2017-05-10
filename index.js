'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 4000
});

server.bind({
    apiBaseUrl: 'http://localhost:4000/api',
    webBaseUrl: 'http://localhost:4000'
});

server.register([
    require('dindin-api'),
    require('inert'),
    require('vision'),
    require('hapi-auth-cookie')
], (err) => {
    if (err) throw err;

    server.auth.strategy('session', 'cookie', 'try', {
        password: 'password-that-is-at-least-32-chars',
        isSecure: false
    });

    server.route(require('./routes'));

    server.views({
        engines: {
            hbs: require('handlebars')
        },
        relativeTo: __dirname,
        path: './views',
        layoutPath: './views/layout',
        layout: true,
        partialsPath: './views/partials',
        helpersPath: './views/helpers',
        isCached: false
    });

    server.start((err) => {
        console.log('Server started at:', server.info.uri);
    });
});

