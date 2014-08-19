define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.BangHomeCtrl', [])
    .controller('BangHomeCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
