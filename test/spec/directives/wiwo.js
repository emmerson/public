'use strict';

describe('Directive: wiwo', function () {

  // load the directive's module
  beforeEach(module('publicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main class="wiwo"></main>');
    element = $compile(element)(scope);
  }));
});
