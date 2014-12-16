'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:about
 * @description
 * # about
 */
angular.module('publicApp')
  .directive('about', function ($window, $rootScope) {
    /**
     * Module dependencies.
     */

    var TimelineMax = $window.TimelineMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Animate "about" route.
         */

        function animateAbout() {
          // initialize timeline and retrieve elements to animate
          var tl           = new TimelineMax();
          var eyebrow      = element[0].getElementsByClassName('eyebrow');
          var largeBlock   = element[0].getElementsByClassName('large-block');
          var callToAction = element[0].getElementsByClassName('btn');
          var p            = element[0].getElementsByClassName('col-sm-6');
          tl
            // wait for main to stagger in
            .delay(0.15)
            // fade in and slide down header
            .staggerFromTo([eyebrow, largeBlock], 0.4, {
                opacity: 0,
                y: -18
              }, {
                opacity: 1,
                y: 0
              }, 0.06)
            // rotate in call to action
            .fromTo(callToAction, 0.6, {
                opacity: 0,
                rotationX: 90,
                transformOrigin: '50% 50% -34.5px'
              }, {
                opacity: 1,
                rotationX: 0,
                transformOrigin: '50% 50% -34.5px'
              }, '-=0.4')
            // slide in paragraphs
            .fromTo(p[0], 0.6, {
                opacity: 0,
                x: -18,
              }, {
                opacity: 1,
                x: 0,
              }, '-=0.6')
            // slide in paragraphs
            .fromTo(p[1], 0.6, {
                opacity: 0,
                x: 18,
              }, {
                opacity: 1,
                x: 0,
              }, '-=0.6');
        }

        /**
         * Handle "initialize" event.
         */

        if ($rootScope.initialized) {
          requestAnimationFrame(animateAbout);
        } else {
          var remove = scope.$on('initialize', function() {
            remove();
            requestAnimationFrame(animateAbout);
          });
        }
      }
    };
  });
