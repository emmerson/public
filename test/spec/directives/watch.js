'use strict';

describe('Directive: watch', function () {

  // load the directive's module
  beforeEach(module('publicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should recompile element when class changes', inject(function ($compile) {
    element = angular.element('<div class="watch"></div>');
    element = $compile(element)(scope);
  }));
});
