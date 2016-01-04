//create module
var webApp = angular.module('webApp', ['ngRoute', 'ngAnimate']);

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
        $scope.pageClass = 'page-home';
        $scope.message = 'I am an aspiring web developer lol';
    });

    webApp.controller('aboutController', function($scope) {
    	$scope.pageClass = 'page-about';
        $scope.message = 'Experience stuff goes here';
    });

    webApp.controller('contactController', function($scope) {
    	$scope.pageClass = 'page-contact';
        $scope.message = 'Contact info goes here';
    });