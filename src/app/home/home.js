angular.module('bis.home', []).config(['$routeProvider', '$locationProvider',
    function($routeProvider,$locationProvider) {
        'use strict';
        $routeProvider
            .when('/home', {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.html'
            });
        $locationProvider.html5Mode(true);
    }
]);
