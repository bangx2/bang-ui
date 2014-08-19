define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.BangPanelCtrl', [])
    .controller('BangPanelCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
