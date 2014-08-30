define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.SurveyCreateCtrl', [])
    .controller('SurveyCreateCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
