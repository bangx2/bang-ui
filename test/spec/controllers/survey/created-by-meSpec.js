/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SurveyCreatedByMeCtrl', function () {

    // load the controller's module
    beforeEach(module('bangUiApp.controllers.SurveyCreatedByMeCtrl'));

    var SurveyCreatedByMeCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SurveyCreatedByMeCtrl = $controller('SurveyCreatedByMeCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
