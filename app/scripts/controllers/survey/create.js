define(['angular'], function (angular) {
  'use strict';

  angular.module('bangUiApp.controllers.SurveyCreateCtrl', [])

    .controller('SurveyCreateCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

      $scope.element_type_options = [
        {label: '单行文本', value: 0},
        {label: '多行文本', value: 1},
        {label: '"是/否"选项', value: 2}
      ];

      $scope.form_content = {
        'title': '',
        'description': '',
        'elements': []
      };

      $scope.add_element = function () {
        var element = {
          'label': '',
          'help_text': '',
          'type': $scope.element_type_options[0].value
        }
        $scope.form_content.elements.push(element);

        var scroll_length = $('#content>section').height();
        $('#content').smoothScroll(scroll_length);
      }

      $scope.remove_element = function (index) {
        $scope.form_content.splice(index, 1);
      }
    
      /*
      $timeout(function () {
        $('#survey-preview').scrollspy({
          animation: 'slide-left',
          delay: 2000
        });
      }, 0);
      */
      

    }]);
});
