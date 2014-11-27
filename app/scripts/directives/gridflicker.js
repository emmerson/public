'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:gridFlicker
 * @description
 * # gridFlicker
 */
angular.module('publicApp')
  .directive('gridFlicker', function ($window) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        var RoughEase = $window.RoughEase;
        var Quint     = $window.Quint;
        var TweenMax  = $window.TweenMax;

        var flickerOutGrid = RoughEase.ease.config({
          strength: 16,
          points: 80,
          template: Quint.easeOut,
          taper: 'out',
          clamp: true
        });

        function fadeInGridPoints() {
          element.addClass('points');
        }

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
