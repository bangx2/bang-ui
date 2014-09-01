define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.SurveyMainCtrl', [])
    .controller('SurveyMainCtrl', ['$scope', '$state', function ($scope, $state) {

      // redirect to create page
      $state.go('survey.create');

    }]);
});
