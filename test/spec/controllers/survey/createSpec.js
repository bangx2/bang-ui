/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SurveyCreateCtrl', function () {

    // load the controller's module
    beforeEach(module('bangUiApp.controllers.SurveyCreateCtrl'));

    var SurveyCreateCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SurveyCreateCtrl = $controller('SurveyCreateCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
