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
          template: Quint.easeOut
        });

        /**
         * Fade in grid points.
         */

        function fadeInGridPoints() {
          element.css('opacity', '');
          element.addClass('fade in points');
        }

        /**
         * Handle "load" event.
         */

        scope.$on('initialize', function() {
          TweenMax.to(element, 0.45, {
            opacity: 0,
            ease: flickerOutGrid,
            onComplete: fadeInGridPoints
          });
        });
      }
    };
  });
