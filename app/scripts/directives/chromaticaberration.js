'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:chromaticAberration
 * @description
 * # chromaticAberration
 */
angular.module('publicApp')
  .directive('chromaticAberration', function ($window, $document) {
    /**
    * Module dependencies.
    */

    var TweenMax = $window.TweenMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Root element.
         */

        var rootElement = element;

        /**
         * Initialize distortion elements.
         */

        function initializeDistortion() {
          // create red and blue channels
          for (var i = 0; i < 2; i++) {
            var channel = element.clone();
            channel.addClass(i === 0 ? 'blue' : 'red');
            channel.addClass('channel');
            channel.css('opacity', '');
            element.append(channel);
            distort(channel);
          }
        }

        // Returns a random number between min (inclusive) and max (exclusive)
        function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
        }

        /**
         * Distort an element.
         */

        var isShuttingDown = false;

        function distort(element) {
          if ($document[0].hidden) { return; }
          if (isShuttingDown) { return; }

          // 25% chance this will happen, if it doesn't normalize the elements
          if (Math.random() > 0.25) {
            TweenMax.to(rootElement, 0, {opacity: 1});
            TweenMax.to(element,     0, {opacity: 0});
            requestAnimationFrame(function() {
              distort(element);
            });
            return;
          }

          // opacity distortion
          var opacity = getRandomArbitrary(0.66, 1);

          // decrease root opacity
          TweenMax.to(rootElement, 0.16, { opacity: Math.max(0.33, 1 - opacity) });

          // increase chromatic channel opacity and displace channel
          TweenMax.to(element, 0.16, {
            opacity: opacity,
            x: getRandomArbitrary(-18, 18),
            y: getRandomArbitrary(-9, 9),
            skewX: getRandomArbitrary(-5.625, 5.625)
          });

          // animate
          requestAnimationFrame(function() {
            distort(element);
          });
        }

        /**
         * Watch "class" changes.
         */

        scope.$watch(function() {
          return element.attr('class');
        }, function() {
          if (element.hasClass('distort')) {
            initializeDistortion();
          }
        });

        /**
        * Handle "$destroy" events.
        */

        scope.$on('$destroy', function() {
          isShuttingDown = true;
        });
      }
    };
  });
