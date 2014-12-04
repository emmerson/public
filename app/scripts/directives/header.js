'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:header
 * @description
 * # header
 */
angular.module('publicApp')
  .directive('header', function ($timeout, $window, $document) {
    /**
     * Module dependencies.
     */

    var TimelineMax = $window.TimelineMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Handle "initialize" events.
         */

        scope.$on('initialize', function() {
          // defer by two frames
          $timeout(function() { requestAnimationFrame(function() {
            // fade in header
            element.addClass('in');

            // expand horizontal rule
            element.find('hr').addClass('expand');

            // initialize timeline and retrieve elements to animate
            var tl = new TimelineMax();
            var navLinks = element[0].querySelectorAll('li a');
            var navTitle = $document[0].getElementById('nav-title');
            tl
              // slide down links
              .staggerFromTo(navLinks, 0.6, {
                  y: -17 + -18
                }, {
                  y: 0
                }, 0.2)
              // rotate in title
              .fromTo(navTitle, 0.6, {
                rotationX: 90,
                transformOrigin: '50% 50% -8.5px'
              }, {
                rotationX: 0,
                transformOrigin: '50% 50% -8.5px'
              }, '-=' + 0.2 * (navLinks.length - 1));
          }); });
        });


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
