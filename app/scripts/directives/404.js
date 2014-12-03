'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:404
 * @description
 * # 404
 */
angular.module('publicApp')
  .directive('404', function ($window, $rootScope) {
    /**
     * Module dependencies.
     */

    var TimelineMax  = $window.TimelineMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Animate "404" route.
         */

        function animate404() {
          // initialize timeline
          var tl = new TimelineMax();
          tl
            // wait for main to stagger in
            .delay(0.2)
            // fade in main
            .call(function() { element.addClass('in'); });
        }

        /**
         * Handle "initialize" event.
         */

        if ($rootScope.initialized) {
          animate404();
        } else {
          var remove = scope.$on('initialize', function() {
            remove();
            animate404();
          });
        }
      }
    };
  });
