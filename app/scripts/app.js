/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/bang/panel', 'controllers/nav', 'controllers/header', 'controllers/bang/home', 'controllers/member/main', 'controllers/survey/main', 'controllers/activity/main', 'controllers/survey/create', 'controllers/survey/created-by-me', 'controllers/survey/invite-me']/*deps*/, function (angular, MainCtrl, BangPanelCtrl, NavCtrl, HeaderCtrl, BangHomeCtrl, MemberMainCtrl, SurveyMainCtrl, ActivityMainCtrl, SurveyCreateCtrl, SurveyCreatedByMeCtrl, SurveyInviteMeCtrl)/*invoke*/ {
  'use strict';

  return angular.module('bangUiApp', ['bangUiApp.controllers.MainCtrl',
'bangUiApp.controllers.BangPanelCtrl',
'bangUiApp.controllers.NavCtrl',
'bangUiApp.controllers.HeaderCtrl',
'bangUiApp.controllers.BangHomeCtrl',
'bangUiApp.controllers.MemberMainCtrl',
'bangUiApp.controllers.SurveyMainCtrl',
'bangUiApp.controllers.ActivityMainCtrl',
'bangUiApp.controllers.SurveyCreateCtrl',
'bangUiApp.controllers.SurveyCreatedByMeCtrl',
'bangUiApp.controllers.SurveyInviteMeCtrl',
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
        .state('bang', {
          url: '/bang',
          templateUrl: 'views/bang/home.html',
          controller: 'BangHomeCtrl'
        })
        .state('member', {
          url: '/member',
          templateUrl: 'views/member/main.html',
          controller: 'MemberMainCtrl'
        })
        .state('survey', {
          url: '/survey',
          templateUrl: 'views/survey/main.html',
          controller: 'SurveyMainCtrl'
        })
        .state('survey.create', {
          url: '/create',
          templateUrl: 'views/survey/create.html',
          controller: 'SurveyCreateCtrl'
        })
        .state('survey.created-by-me', {
          url: '/created-by-me',
          templateUrl: 'views/survey/created-by-me.html',
          controller: 'SurveyCreatedByMeCtrl'
        })
        .state('survey.invite-me', {
          url: '/invite-me',
          templateUrl: 'views/survey/invite-me.html',
          controller: 'SurveyInviteMeCtrl'
        })
        .state('activity', {
          url: '/activity',
          templateUrl: 'views/activity/main.html',
          controller: 'ActivityMainCtrl'
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
