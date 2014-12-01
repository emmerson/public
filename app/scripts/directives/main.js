'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:main
 * @description
 * # main
 */
angular.module('publicApp')
  .directive('main', function ($timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Handle "initialize" events.
         */

        scope.$on('initialize', function() {
          // defer by two frames
          $timeout(function() { requestAnimationFrame(function() {
            // fade in main
            element.addClass('in');
          }); }, 1000 * 0.161803399);
        });
      }
    };
  });
