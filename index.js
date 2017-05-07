const Hapi = require('hapi');
const Sqlite3 = require('sqlite3');

const server = new Hapi.Server();
const db = new Sqlite3.Database('./dindin.sqlite');

server.bind({ db: db });

server.connection({
  host: 'localhost',
  port: 8080
});

server.route(require('./routes'));

server.start(function(err) {
  console.log('Listening at:', server.info.uri);
});