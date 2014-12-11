'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:header
 * @description
 * # header
 */
angular.module('publicApp')
  .directive('header', function ($timeout, $document) {
    return {
      restrict: 'C',
      link: function postLink(scope) {
        /**
         * Handle "viewLoaded" events.
         */

        scope.$on('viewLoaded', function() {
          var navTitle = $document[0].getElementById('nav-title');
          navTitle.textContent = null;
        });
      }
    };
  });
