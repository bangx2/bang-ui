define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.MemberMainCtrl', [])
    .controller('MemberMainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
