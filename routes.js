'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/recipes',
        handler: function (request, reply) {
          let sql = 'SELECT * FROM recipes';
          const params = [];
          if (request.query.cuisine) {
            console.log(request.query.cuisine);
            sql += ' WHERE cuisine = ?';
            params.push(request.query.cuisine);
          }
          db.all(sql, params, (err, results) => {
            if (err) throw err;
            reply(results);
          });
        }
    },{
        method: 'GET',
        path: '/api/v1/recipes/{id}',
        handler: function (request, reply) {
          let sql = 'SELECT * FROM recipes WHERE id = ?';
          db.get('SELECT * FROM recipes WHERE id = ?',
              [request.params.id],
              (err, results) => {
                  if (err) throw err;
                  if (typeof results !== 'undefined') {
                      return reply(results);
                  }
                  return reply('Not Found').code(404);
          });
        }
    }
];