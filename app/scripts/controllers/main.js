define(['angular', 'angular-foundation'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.MainCtrl', ['mm.foundation'])
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
