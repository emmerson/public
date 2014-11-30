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
        var clearObserve = attrs.$observe('class', function() {
          // Disable recompiling within the same $digest loop
          if (scope.recompiled) {
            return;
          }

          // Recompile when the class attribute changes
          $compile(element)(scope);

          // Disable recompiling until the next $digest loop
          scope.recompiled = true;
          $timeout(function() {
            scope.recompiled = undefined;
          });
        });

        scope.$on('$destroy', function() {
          clearObserve();
        });
      }
    };
  });
