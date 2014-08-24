define(['angular', 'config'], function (angular, config) {
  'use strict';

  angular.module('bangUiApp.controllers.NavCtrl', [])
    .controller('NavCtrl', ['$scope', '$http', function ($scope, $http) {

      //$http({url: config.api_url + '/bang/my-bangs/', method: 'GET'})
      //.success(function (data, status, headers, config) {
      //  var bangs = data;
      //  $scope.current_bang = bangs[0];
      //});

      $scope.$on('CurrentBang', function (event, msg) {
        $scope.current_bang = msg;
      });

    }]);
});
