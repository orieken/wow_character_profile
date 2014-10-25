'use strict';

var App = angular.module('App', []);

App.controller("playerController", function($scope, $http) {
    $http.get('/player').success(function(data) {
        $scope.player = data;
    })
});
