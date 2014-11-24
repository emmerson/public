'use strict';

describe('Directive: gridFlicker', function () {

  // load the directive's module
  beforeEach(module('publicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make visible element hidden', inject(function ($compile) {
    element = angular.element('<div class="grid-flicker"></div>');
    element = $compile(element)(scope);
  }));
});
