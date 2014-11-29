'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:header
 * @description
 * # header
 */
angular.module('publicApp')
  .directive('header', function ($timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        // Defer by two frames.
        $timeout(function() {
          requestAnimationFrame(function() {
            element.addClass('in');
            element.find('hr').addClass('expand');
          });
        });
      }
    };
  });
