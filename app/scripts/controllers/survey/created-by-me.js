define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.SurveyCreatedByMeCtrl', [])
    .controller('SurveyCreatedByMeCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
