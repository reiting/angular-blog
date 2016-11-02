//Logic for page actions here. 

//this is the main controller, under which all controllers will exist
angular.module('RachelsBlog.controllers', [])
    //controller for blogpost
    .controller('BlogPostController', ['$scope', 'BlogpostFactory', '$location', function ($scope, BlogpostFactory, $location) {
        console.log('here is where some posts happen');

        $scope.blogposts = BlogpostFactory.query();

        $scope.goToSinglePost = function (id) {
            $location.path('/blogpost/' + id);
        }
    }])


    //controller for single post
    .controller('SinglePostController', ['$scope', '$routeParams', 'BlogpostFactory', '$location', function ($scope, $routeParams, BlogpostFactory, $location) {
        //gets the ID of the post and stores in var, do this for edit post as well
        var theidoftheblogpost = $routeParams.id;
        //gets the specific blog with the id 
        $scope.singleblog = BlogpostFactory.get(
            { id: theidoftheblogpost }
        );

        $scope.goToEditPost = function (id) {
            $location.path('/editpost/' + id);
        }

        $scope.deletePost = function() {
            $scope.singleblog.$delete(function () {
                console.log('i deleted');
                $location.path('/');
            })
        }
    }])

    //controller for new post
    .controller('NewPostController', ['$scope', 'BlogpostFactory', '$location', function ($scope, BlogpostFactory, $location) {
        //stores the content in empty places
        $scope.blog = {
            title: '',
            author: '',
            content: '',
        }
        //puts that content in the html (creates post)
        $scope.savePost = function () {
            var newPost = {
                title: $scope.blog.title,
                author: $scope.blog.author,
                content: $scope.blog.content,
            }
            //causes the page to go back home when button is clicked
            $location.path('/blogposts');

            //puts the post in the variable p
            var p = new BlogpostFactory(newPost);
            //calls the function on p
            p.$save(function () {
                console.log('you posted me');
                console.log(p);
            })
        }
    }])

    .controller('EditPostController', ['$scope', 'BlogpostFactory', '$routeParams', '$location', function ($scope, BlogpostFactory, $routeParams, $location) {
        var theidoftheblogpost = $routeParams.id;
        //gets the specific blog with the id 
        $scope.singleblog = BlogpostFactory.get(
            { id: theidoftheblogpost }
        );

        $scope.updatePost = function () {
            $scope.singleblog.$update(function () {
                console.log('i updated');
                $location.path('/');
            })
        }

    }])
