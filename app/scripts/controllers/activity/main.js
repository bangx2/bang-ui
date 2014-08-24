define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.ActivityMainCtrl', [])
    .controller('ActivityMainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
