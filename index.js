const Hapi = require('hapi');
const Sqlite3 = require('sqlite3');

const server = new Hapi.Server();
const db = new Sqlite3.Database('./dindin.sqlite');

server.bind({db: db});

server.connection({
    host: 'localhost',
    port: 8080
});

const validateFunc = function (token, callback) {
    db.get('SELECT * FROM users  WHERE token = ?',
        [token],
        (err, result) => {

        if (err) {
            return callback(err, false);
        }

        const user = result;

        if (typeof user === 'undefined') {
            return callback(null, false);
        }

        callback(null, true, {
            id: user.id,
            username: user.username
        });
    });
};

server.register(require('hapi-auth-bearer-token'), (err) => {
    if (err) throw err;

    server.auth.strategy('api', 'bearer-access-token', {
        validateFunc: validateFunc
    });

    server.route(require('./routes'));

    server.start(function (err) {
        console.log('Listening at:', server.info.uri);
    });
});

