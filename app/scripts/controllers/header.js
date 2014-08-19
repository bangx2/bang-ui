define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.HeaderCtrl', [])
    .controller('HeaderCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
