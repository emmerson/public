'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:issues
 * @description
 * # issues
 */
angular.module('publicApp')
  .directive('issues', function ($window, $rootScope) {
    /**
     * Module dependencies.
     */

    var TimelineMax = $window.TimelineMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Animate "issues" route.
         */

        function animateIssues() {
          // initialize timeline and retrieve elements to animate
          var tl    = new TimelineMax();
          var h1    = element[0].querySelector('h1 > .header');
          var small = element[0].querySelector('h1 > small');
          var hosts = element[0].getElementsByClassName('host');
          tl
            // wait for main to stagger in
            .delay(0.15)
            // fade in and slide down header
            .staggerFromTo([h1, small], 0.4, {
                opacity: 0,
                y: -18
              }, {
                opacity: 1,
                y: 0
              }, 0.06)
            // rotate in repository hosts
            .fromTo(hosts, 0.6, {
                opacity: 0,
                rotationX: 90,
                transformOrigin: '50% 50% -34.5px'
              }, {
                opacity: 1,
                rotationX: 0,
                transformOrigin: '50% 50% -34.5px'
              }, '-=0.4');
        }

        /**
         * Handle "initialize" event.
         */

        if ($rootScope.initialized) {
          requestAnimationFrame(animateIssues);
        } else {
          var remove = scope.$on('initialize', function() {
            remove();
            requestAnimationFrame(animateIssues);
          });
        }
      }
    };
  });
