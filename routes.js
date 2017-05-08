'use strict';

const Recipes = require('./handlers/recipes');

module.exports = [
    {
        method: 'GET',
        path: '/api/v1/recipes',
        handler: Recipes.find
    }, {
        method: 'GET',
        path: '/api/v1/recipes/{id}',
        handler: Recipes.findOne
    }, {
        method: 'POST',
        path: '/api/v1/recipes',
        config: {
          auth: 'api'
        },
        handler: Recipes.create
    }, {
        method: 'POST',
        path: '/api/v1/recipes/{id}/star',
        config: {
          auth: 'api'
        },
        handler: Recipes.star
    }
];