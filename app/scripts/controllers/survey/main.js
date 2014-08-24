define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.SurveyMainCtrl', [])
    .controller('SurveyMainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
