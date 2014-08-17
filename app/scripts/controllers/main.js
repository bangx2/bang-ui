define(['config', 'angular'], function (config, angular) {
  'use strict';

  angular.module('bangUiApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope, $http) {
      $http({url: config.api_url + '/bang/bang-detail/1/', method: 'GET'})
      .success(function (data, status, headers, config) {
        console.log(data.name); // Should log 'foo'
      });
    })
    .controller('LoginCtrl', ['$scope', '$http', '$cookies', '$state', function ($scope, $http, $cookies, $state) {
      // $scope.user = {};
      $scope.login = function () {
        $http
          .post(config.api_url + '/api-token-auth/', $scope.user)
          .success(function (data, status, headers, config) {
            $cookies.token = data.token;
            $scope.message = 'Welcome';
            $state.go('main');
          })
          .error(function (data, status, headers, config) {
            // Erase the token if the user fails to log in
            delete $cookies.token;
            // Handle login errors here
            $scope.message = 'Error: Invalid user or password';
          });
      };
    }]);
});
