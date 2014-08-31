define(['config', 'angular'], function (config, angular) {
  'use strict';

  angular.module('bangUiApp.controllers.MemberMainCtrl', [])
    .controller('MemberMainCtrl', ['$scope', '$http', function ($scope, $http) {

      $scope.current_bang = $scope.$parent.current_bang;
      $scope.$on('CurrentBang', function (event, msg) {
        $scope.current_bang = msg;
        get_members();
      });

      var get_members = function () {
        $http({url: config.api_url + '/bang/bang-members/', method: 'GET'})
        .success(function (data, status, headers, config) {
          $scope.members = data;
          console.log($scope.members);
        });
      }

      if ($scope.current_bang) {
        get_members();
      }


    }]);
});
