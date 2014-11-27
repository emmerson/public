'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:navLink
 * @description
 * # navLink
 */
angular.module('publicApp')
  .directive('navLink', function ($location) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        var routeName = $location.path();
        if (routeName === element.find('a').attr('href')) {
          element.addClass('active');
        }
      }
    };
  });
