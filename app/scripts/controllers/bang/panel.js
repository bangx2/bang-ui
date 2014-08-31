define(['config', 'angular'], function (config, angular) {
  'use strict';

  angular.module('bangUiApp.controllers.BangPanelCtrl', [])
    .controller('BangPanelCtrl', ['$scope', '$http', '$cookies', function ($scope, $http, $cookies) {

      $http({url: config.api_url + '/bang/my-bangs/', method: 'GET'})
      .success(function (data, status, headers, config) {
        $scope.bangs = data;
      });

      $scope.current_bang = $scope.$parent.current_bang; // parent: ontrallers/main.js -> MainCtrl

      $scope.message = 'to create';

      $scope.bang = {};
      $scope.create = function () {
        $http({
          method: 'POST',
          url: config.api_url + '/bang/create-bang/',
          data: $.param($scope.bang),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .success(function (data, status, headers, config) {
          $scope.message = $scope.bang.name + ' 创建成功';
        })
        .error(function (data, status, headers, config) {
          // Handle errors here
          $scope.message = '创建失败，请联系我 deggs.k@gmail.com';
        });
      }

      $scope.select_bang = function (bang) {
        $scope.selected_bang = bang;
        $scope.$emit('SelectedBang', $scope.selected_bang);
      };


    }]);
});
