'use strict';

describe('Controller: WiwoCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var WiwoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WiwoCtrl = $controller('WiwoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
