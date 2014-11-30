'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:about
 * @description
 * # about
 */
angular.module('publicApp')
  .directive('about', function () {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        element.text('this is the about directive');
      }
    };
  });
