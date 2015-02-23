
var app = angular.module('eCommerce',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller:'newUser',
            templateUrl: 'newUser.html'
        })
        .when('/newUser',{
            controller: 'newUser',
            templateUrl: 'newUser.html'
        })
        .when('/existingUser',{
            controller: 'existingUser',
            templateUrl: 'existingUser.html'
        })
        .when('/cmsUser',{
            controller: 'cmsUser',
            templateUrl: 'cmsUser.html'
        })
        .when('/adminUser',{
            controller: 'adminUser',
            templateUrl: 'adminUser.html'
        })
        .otherwise({redirectTo: '/'});

});