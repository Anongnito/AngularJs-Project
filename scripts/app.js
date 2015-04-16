var app = angular.module('eCommerce', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'homeInfoText',
            templateUrl: 'homepage.html'
        })
        .when('/products', {
            controller: 'products',
            templateUrl: 'products.html'
        })
        .when('/about', {
            controller: 'about',
            templateUrl: 'about.html'
        })
        .when('/contact', {
            controller: 'contact',
            templateUrl: 'contact.html'
        })
        .otherwise({redirectTo: '/'});

});

app.directive('chart1', function() {
    return {
        restrict: 'E',
        replace: false,
        scope: {data: '=chartData'},
        link: function(scope, element) {
            var chart1 = d3.select(element[0]);

            chart1.append("div").attr("class", "chart")
                .selectAll('div')
                .data(scope.data).enter().append("div")
                .transition().ease("elastic")
                .style({
                    "height": function(d) {
                        return d + "%";
                    }
                })
                .text(function(d) {
                    return d + "%";
                });
        }
    };
});