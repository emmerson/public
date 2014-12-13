'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:background
 * @description
 * # background
 */
angular.module('publicApp')
  .directive('background', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        scope.$on('initialize', function() {
          element.addClass('in');
        });
      }
    };
  });
