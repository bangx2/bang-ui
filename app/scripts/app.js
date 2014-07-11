/*jshint unused: vars */
define(['angular', 'controllers/main', 'angular-foundation']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
  'use strict';

  return angular.module('bangUiApp', ['bangUiApp.controllers.MainCtrl', 'mm.foundation',
/*angJSDeps*/
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
