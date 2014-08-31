define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.BangHomeCtrl', [])
    .controller('BangHomeCtrl', function ($scope) {

      $scope.current_bang = $scope.$parent.current_bang; // parent: ontrallers/main.js -> MainCtrl
      $scope.$on('CurrentBang', function (event, msg) {
        $scope.current_bang = msg;
      });

    });
});
