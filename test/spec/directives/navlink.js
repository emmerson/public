'use strict';

describe('Directive: navLink', function () {

  // load the directive's module
  beforeEach(module('publicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make nav link active', inject(function ($compile) {
    element = angular.element('<li class="nav-link"></li>');
    element = $compile(element)(scope);
  }));

  it('should set nav title', inject(function () {
  }));
});
