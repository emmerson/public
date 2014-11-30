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
            // Fade in footer
            element.addClass('in');

            // Slide down footer
            element.addClass('slide-down');
          });
        }, 1000 * (0.161803399 * 2));
      }
    };
  });
