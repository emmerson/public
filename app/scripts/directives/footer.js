'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:footer
 * @description
 * # footer
 */
angular.module('publicApp')
  .directive('footer', function ($timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        // Defer by two frames.
        $timeout(function() {
          requestAnimationFrame(function() {
            element.addClass('in');
          });
        }, 1000 * (0.06 * 2));
      }
    };
  });
