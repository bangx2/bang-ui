/*jshint unused: vars */
define(['angular', 'controllers/main', 'amui']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
  'use strict';

  return angular.module('bangUiApp', ['bangUiApp.controllers.MainCtrl',
/*angJSDeps*/
  'ngCookies',
  'ngSanitize',
  //'ngRoute',
  /* 3rd Party Modules */
  'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');
      // $urlRouterProvider.when('/', '/login');

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'MainCtrl'
        })
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        });

    }]);
});
