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
        /**
         * Handle "initialize" events.
         */

        scope.$on('initialize', function() {
          // defer by two frames
          $timeout(function() { requestAnimationFrame(function() {
            // fade in footer
            element.addClass('in');

            // slide down footer
            element.addClass('slide-down');
          }); }, 1000 * (0.2 * 2));
        });
      }
    };
  });
