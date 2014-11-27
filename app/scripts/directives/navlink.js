'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:navLink
 * @description
 * # navLink
 */
angular.module('publicApp')
  .directive('navLink', function ($location, $document) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        var routeName = $location.path();
        var link      = element.find('a');
        if (routeName === link.attr('href')) {
          element.addClass('active');

          var document = $document[0];
          var navTitle = document.getElementById('nav-title');
          navTitle.textContent = link.attr('title');
        }
      }
    };
  });
