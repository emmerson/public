'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:wiwo
 * @description
 * # wiwo
 */
angular.module('publicApp')
  .directive('wiwo', function ($window, $rootScope) {
    /**
     * Module dependencies.
     */

    var TimelineMax  = $window.TimelineMax;

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
          var intro = element[0].getElementsByClassName('intro');
          var tiles = element[0].getElementsByClassName('project-tile');
          tl
            // wait for main to stagger in
            .delay(0.2)
            // fade in main
            .call(function() { element.addClass('in'); })
            // fade in and slide down header
            .staggerFromTo([h1, intro], 0.6, {
                opacity: 0,
                z: -152,
              }, {
                opacity: 1,
                z: 0
              }, 0.2)
            // rotate in project tiles
            .staggerFromTo(tiles, 2, {
                opacity: 0,
                z: -152,
                transformOrigin: '50% 50% -152px'
              }, {
                opacity: 1,
                z: 0,
                transformOrigin: '50% 50% -152px'
              }, 0.2, '-=0.4');
        }

        /**
         * Handle "initialize" event.
         */

        if ($rootScope.initialized) {
          animateWiwo();
        } else {
          var remove = scope.$on('initialize', function() {
            remove();
            animateWiwo();
          });
        }
      }
    };
  });
