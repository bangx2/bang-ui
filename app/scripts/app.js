/*jshint unused: vars */
define(['angular', 'controllers/main']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
  'use strict';

  return angular.module('bangUiApp', ['bangUiApp.controllers.MainCtrl',
/*angJSDeps*/
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'views/login.html',
          controller: 'MainCtrl'
        })
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

      /* Removing the # symbol from urls */
      //$locationProvider.html5Mode(true);
    }]);
});
