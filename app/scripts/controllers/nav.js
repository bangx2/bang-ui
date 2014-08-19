define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.NavCtrl', [])
    .controller('NavCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
