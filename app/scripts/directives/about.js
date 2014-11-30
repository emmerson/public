'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:about
 * @description
 * # about
 */
angular.module('publicApp')
  .directive('about', function ($window) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        var TimelineMax = $window.TimelineMax;
        // element.text('this is the about directive');
      }
    };
  });
