'use strict';

var app = angular.module('app');
app.controller('CommentsController', ['$scope', 'Comment', '$routeParams', function ($scope, Comment, $routeParams) {
    // index - show all comments
    $scope.comments = Comment.query({questionId: $routeParams.id});

    // create
    $scope.save = function () {
        //Create the comment object to be sent to the server
        var obj = new Comment({name: $scope.name, answer: $scope.answer, questionId: $routeParams.id});

        // try to save
        obj.$save(function (response) {

            // if comment.save == true
            $scope.comments.unshift(response);

            // clean the name & answer fields
            $scope.name = $scope.answer = ""

        }, function (response) {

            // show errors
            $scope.errors = response.data.errors;
        });
    }
}]);
