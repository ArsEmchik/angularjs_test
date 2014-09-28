'use strict';

var app = angular.module('app');

app.controller('QuestionIndexController', ['$scope', 'Question', function ($scope, Question) {
    // index - show all questions
    $scope.items = Question.query();

    // delete question
    $scope.destroy = function (index) {

        // tell the server to remove question
        Question.remove({id: $scope.items[index].id}, function () {
            // remove it from our list
            $scope.items.splice(index, 1);
        });
    }
}]);

app.controller('QuestionCreateController', ['$scope', '$location', 'Question', function ($scope, $location, Question) {
    // create new question
    $scope.save = function () {

        // create the question object to send to the back-end
        var question = new Question($scope.question);

        // save the forum object
        question.$save(function () {

            //Redirect us back to the main page
            $location.path('/');

        }, function (response) {

            // show errors
            $scope.errors = response.data.errors;
        });
    }
}]);

app.controller('QuestionShowController', ['$scope', 'Question', 'Comment', '$routeParams', function ($scope, Question, Comment, $routeParams) {
    // get question from the server
    $scope.question = Question.get({id: $routeParams.id})
}]);
