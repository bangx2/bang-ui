define(['config', 'angular'], function (config, angular) {
  'use strict';

  angular.module('bangUiApp.controllers.BangPanelCtrl', [])
    .controller('BangPanelCtrl', ['$scope', '$http', '$cookies', '$state', function ($scope, $http, $cookies, $state) {

      var init_bangs = function () {
        $http({url: config.api_url + '/bang/my-bangs/', method: 'GET'})
        .success(function (data, status, headers, config) {
          $scope.bangs = data;
        });
      };

      init_bangs();

      $scope.current_bang = $scope.$parent.current_bang; // parent: ontrallers/main.js -> MainCtrl

      $scope.message = '';

      $scope.bang = {};
      $scope.create = function () {
        $http({
          method: 'POST',
          url: config.api_url + '/bang/create-bang/',
          data: $.param($scope.bang),
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .success(function (data, status, headers, config) {
          $('#create-bang-modal').modal('close');
          init_bangs();
        })
        .error(function (data, status, headers, config) {
          // Handle errors here
          $scope.message = '创建失败，请联系我 deggs.k@gmail.com';
        });
      }

      $scope.select_bang = function (bang) {
        $scope.selected_bang = bang;
        $scope.$emit('SelectedBang', $scope.selected_bang);
        $state.go('bang');
        $('#bang-panel').offCanvas('close');
        init_bangs();
      };


    }]);
});
