'use strict';

exports.home = function(request, reply) {

    const recipes = [{
        id: 1,
        name: 'Silicate Soup',
        cuisine: 'Martian',
        stars: 100,
        servers: 1,
        prep_time: '2 hours',
        cooking_time: '12 minutes'
    }];

    reply.view('index', {
        recipes: recipes
    });
};
