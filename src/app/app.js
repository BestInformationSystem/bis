angular.module('bis', [
    'ngRoute', 
    'ngResource',
    'bis.home',
    'bis.todo'    
])
    .config(['$routeProvider',
        function($routeProvider) {
            'use strict';
            //Default route
            $routeProvider.otherwise({
                redirectTo: '/home'
            });
        }
    ]);
