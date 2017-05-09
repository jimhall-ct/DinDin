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
    },{
        id: 2,
        name: 'Methane Trifle',
        cuisine: 'Neptunian',
        stars: 200,
        servers: 1,
        prep_time: '1 hour',
        cooking_time: '24 minutes'
    }];

    reply.view('index', {
        recipes: git recipes
    });
};
