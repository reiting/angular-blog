//The action to call the local API should be here
//all factories
angular.module('RachelsFactory.factories', [])
    //specifically the blogpost factory
    .factory('BlogpostFactory', ['$resource', function($resource) {
        return $resource('http://localhost:3000/api/posts/:id', { id: '@id' }, {
            'update': {method: 'PUT'},
    });
}]);


// factories.js—blogpost factory— create a factory that you call blogpost. 
// this needs to return the resource with api/blogposts/:id