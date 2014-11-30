'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:header
 * @description
 * # header
 */
angular.module('publicApp')
  .directive('header', function ($timeout, $window, $document) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        // Defer by two frames.
        $timeout(function() {
          requestAnimationFrame(function() {
            // Fade in header
            element.addClass('in');

            // Expand horizontal rule
            element.find('hr').addClass('expand');

            // Slide down links and rotate in title
            var TimelineMax = $window.TimelineMax;
            var tl = new TimelineMax();
            var navLinks = element[0].querySelectorAll('li a');
            var navTitle = $document[0].getElementById('nav-title');
            tl
              .staggerFromTo(navLinks, 0.2, {
                  y: -17 + -18
                }, {
                  y: 0
                }, 0.161803399)
              .fromTo(navTitle, 0.4, {
                rotationX: 90,
                transformOrigin: '50% 50% -8.5px'
              }, {
                rotationX: 0,
                transformOrigin: '50% 50% -8.5px'
              });
          });
        });
      }
    };
  });
