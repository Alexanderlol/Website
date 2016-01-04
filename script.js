//create module
var webApp = angular.module('webApp', ['ngRoute']);

	// configure our routes
    webApp.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
            
            // use the HTML5 History API
        $locationProvider.html5Mode(true);
});

    // create the controller and inject Angular's $scope
    webApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    webApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    webApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });