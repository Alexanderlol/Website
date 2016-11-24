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
            .when('/portfolio', {
                templateUrl : 'pages/portfolio.html',
                controller  : 'portfolioController'
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
        $scope.pageClass = '/page-home';
        $scope.updates = ['<br><br>Hi, my name is Alex <br> Welcome to my Website !'];
        $(function(){
            $(".update-box p").typed({
              strings:$scope.updates,
              typeSpeed: 60,
              loop: false,
             // backSpeed: 50,
             // backDelay: 300,
              contentType: 'html',
              loopCount: false,
              showCursor: false,
              cursorChar: "|"
            });
          });
        
    });

    webApp.controller('aboutController',function($scope) {
        $scope.pageClass = '/page-about';
        //default states for about-buttons
        $scope.Dev = false;
        $scope.Work = false;
    });

    webApp.controller('portfolioController', function($scope) {
        $scope.pageClass = '/page-portfolio';
    });

    webApp.controller('contactController', function($scope, $http) {
        $scope.pageClass = '/page-contact';
    });