'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:gridFlicker
 * @description
 * # gridFlicker
 */
angular.module('publicApp')
  .directive('gridFlicker', function ($window) {
    /**
     * Module dependencies.
     */

    var RoughEase = $window.RoughEase;
    var Quint     = $window.Quint;
    var TweenMax  = $window.TweenMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Configure grid flicker.
         */

        var flickerOutGrid = RoughEase.ease.config({
          strength: 16,
          points: 80,
          template: Quint.easeOut,
          taper: 'out',
          clamp: true
        });

        /**
         * Fade in grid points.
         */

        function fadeInGridPoints() {
          element.addClass('points');
        }

        /**
         * Handle "load" event.
         */

        angular.element($window).one('load', function() {
          TweenMax.to(element, 2, {
            opacity: 0,
            ease: flickerOutGrid,
            onComplete: fadeInGridPoints
          });
        });
      }
    };
  });
