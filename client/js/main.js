//Use to instantiate app, connect factory & controllers and configure app.

angular.module('RachelsBlog', ['ngRoute', 'ngResource', 'RachelsBlog.controllers', 'RachelsFactory.factories'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/blogposts', {
                templateUrl: 'views/blogposts.html',
                controller: 'BlogPostController'
            })
            .when('/blogpost/:id', {
                templateUrl: 'views/singlepost.html',
                controller: 'SinglePostController'
            })
            .when('/editpost/:id', {
                templateUrl: 'views/editpost.html',
                controller: 'EditPostController'
            })
            .when('/newpost', {
                templateUrl: 'views/newpost.html',
                controller: 'NewPostController'
            })
            .otherwise({
                redirectTo: '/blogposts',
            })
    }]);


