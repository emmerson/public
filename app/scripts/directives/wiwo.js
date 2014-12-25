'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:wiwo
 * @description
 * # wiwo
 */
angular.module('publicApp')
  .directive('wiwo', function ($window, $document, $rootScope) {
    /**
     * Module dependencies.
     */

    var TimelineMax = $window.TimelineMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Animate "wiwo" route.
         */

        function animateWiwo() {
          // initialize timeline and retrieve elements to animate
          var tl    = new TimelineMax();
          var h1    = element[0].getElementsByTagName('h1');
          var tiles = element[0].getElementsByClassName('project-tile');
          tl
            // wait for main to stagger in
            .delay(0.15)
            // bring forth header and intro
            .staggerFromTo(h1, 0.6, {
                opacity: 0,
                z: -260,
              }, {
                opacity: 1,
                z: 0
              }, 0.06, '+=0', function() {
                angular.element($document[0].querySelector('.chromatic-aberration'))
                  .addClass('distort');
                scope.$apply();
              })
            // rotate in project tiles
            .fromTo(tiles, 6, {
                opacity: 0,
                z: -260,
                rotationY: 90
              }, {
                opacity: 1,
                z: 0,
                rotationY: 0
              }, '-=0.6');
        }

        /**
         * Handle "initialize" event.
         */

        if ($rootScope.initialized) {
          requestAnimationFrame(animateWiwo);
        } else {
          var remove = scope.$on('initialize', function() {
            remove();
            requestAnimationFrame(animateWiwo);
          });
        }
      }
    };
  });
