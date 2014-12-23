'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:toggle
 * @description
 * # toggle
 */
angular.module('publicApp')
  .directive('toggle', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var toggle = attrs.toggle;

        /**
        * Tooltip.
        */

        if (toggle === 'tooltip') {
          element.tooltip();
        }
      }
    };
  });
