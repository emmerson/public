'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:watch
 * @description
 * # watch
 */
angular.module('publicApp')
  .directive('watch', function ($compile, $timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        /**
         * Watch for "class" changes.
         */

        var clearObserve = attrs.$observe('class', function() {
          // disable recompiling within the same $digest loop
          if (scope.recompiled) {
            return;
          }

          // recompile when the class attribute changes
          $compile(element)(scope);

          // disable recompiling until the next $digest loop
          scope.recompiled = true;
          $timeout(function() {
            scope.recompiled = undefined;
          });
        });

        /**
         * Handle "$destroy" event.
         */

        scope.$on('$destroy', function() {
          clearObserve();
        });
      }
    };
  });
