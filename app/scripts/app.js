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

    .factory('authInterceptor', function ($q, $cookies, $location) {
      return {
        request: function (config) {
          config.headers = config.headers || {};
          if ($cookies.token) {
            config.headers.Authorization = 'Token ' + $cookies.token;
          }
          return config;
        },
        responseError: function (response) {
          if (response.status == 401) {
            $location.path('/login');
          }
          return $q.reject(response);
        }
      };
    })

    .config(function ($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
      //$httpProvider.defaults.withCredentials = true;
    })

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');
      // $urlRouterProvider.when('/', '/login');

      $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        })
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        });

    }]);
});
