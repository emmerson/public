'use strict';

describe('Controller: PortfolioCtrl', function () {

  // load the controller's module
  beforeEach(module('publicApp'));

  var PortfolioCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PortfolioCtrl = $controller('PortfolioCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of projects to the scope', function () {
    expect(Object.keys(scope.projects).length).toBeGreaterThan(0);
  });

  it('should attach a list of years to the scope', function () {
    expect(scope.years.length).toBeGreaterThan(0);
  });

  it('should attach a list of filtered results to the scope', function () {
    expect(Object.keys(scope.results).length).toBeGreaterThan(0);
  });
});
