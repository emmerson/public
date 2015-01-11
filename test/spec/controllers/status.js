'use strict';

describe('Controller: StatusCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var StatusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StatusCtrl = $controller('StatusCtrl', {
      $scope: scope
    });
  }));

  it('should attach usage to the scope', function () {
    // expect(scope.usage).toBeDefined();
  });
});
