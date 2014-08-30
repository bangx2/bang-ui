/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SurveyInviteMeCtrl', function () {

    // load the controller's module
    beforeEach(module('bangUiApp.controllers.SurveyInviteMeCtrl'));

    var SurveyInviteMeCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SurveyInviteMeCtrl = $controller('SurveyInviteMeCtrl', {
        $scope: scope
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(scope.awesomeThings.length).toBe(3);
    });
  });
});
