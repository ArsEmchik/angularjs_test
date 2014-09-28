'use strict';

var app = angular.module('app');

app.factory('Question', ['$resource', function ($resource) {
    return $resource('/questions/:id', {id: '@id'});
}]);

app.factory('Comment', ['$resource', function ($resource) {
    return $resource('/questions/:questionId/comments/:id', {questionId: '@questionId', id: '@id'});
}]);
