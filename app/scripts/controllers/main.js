define(['config', 'angular'], function (config, angular) {
  'use strict';

  angular.module('bangUiApp.controllers.MainCtrl', [])

    .controller('MainCtrl', ['$scope', '$http', '$cookies', '$location', function ($scope, $http, $cookies, $location) {
      $scope.isSpecificPage = function(){
          var path = $location.path();
          return _.contains(['/login', '/index'], path);
      };
      
      $http({url: config.api_url + '/bang/default-bang/', method: 'GET'})
      .success(function (data, status, headers, config) {
        $scope.current_bang = data;
        $cookies.bang_id = data['bang_id'];
      });

      $scope.$on('SelectedBang', function (event, msg) {
        $scope.current_bang = msg;
        $cookies.bang_id = msg['bang_id'];
        $scope.$broadcast('CurrentBang', msg);
      });

    }])


    .controller('IndexCtrl', ['$scope', '$http', function ($scope, $http) {
      // $http({url: config.api_url + '/bang/my-bangs/', method: 'GET'})
      // .success(function (data, status, headers, config) {
      // });
    }])


    .controller('LoginCtrl', ['$scope', '$http', '$cookies', '$state', function ($scope, $http, $cookies, $state) {
      // $scope.user = {};
      $scope.login = function () {
        $http
          .post(config.api_url + '/api-token-auth/', $scope.user)
          .success(function (data, status, headers, config) {
            $cookies.token = data.token;
            $scope.message = 'Welcome';
            $state.go('bang');
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
