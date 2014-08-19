/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/bang/panel']/*deps*/, function (angular, MainCtrl, BangPanelCtrl)/*invoke*/ {
  'use strict';

  return angular.module('bangUiApp', ['bangUiApp.controllers.MainCtrl',
'bangUiApp.controllers.BangPanelCtrl',
/*angJSDeps*/
  'ngCookies',
  'ngSanitize',
  //'ngRoute',
  /* 3rd Party Modules */
  'ui.router'
])

    .factory('authInterceptor', ['$q', '$cookies', '$location', function ($q, $cookies, $location) {
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
    }])

    .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('authInterceptor');
      //$httpProvider.defaults.withCredentials = true;
    }])

    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/index');
      // $urlRouterProvider.when('/', '/login');

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .state('index', {
          url: '/index',
          templateUrl: 'views/index.html',
          controller: 'IndexCtrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        });

    }]);
});
