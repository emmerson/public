'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:chromaticAberration
 * @description
 * # chromaticAberration
 */
angular.module('publicApp')
  .directive('chromaticAberration', function ($window) {
    /**
    * Module dependencies.
    */

    var TweenMax = $window.TweenMax;

    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        /**
         * Initialize distortion channels.
         */

        function initializeDistortion() {
          // create red and blue channels
          var channels = [];
          for (var i = 0; i < 2; i++) {
            var channel = element.clone();
            channel
              .addClass(i === 0 ? 'red' : 'blue')
              .addClass('channel')
              .css('opacity', '');
            channels.push(channel);
            element.append(channel);
          }
          distort(channels);
        }

        // Returns a random number between min (inclusive) and max (exclusive)
        function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
        }

        /**
         * Distort channels.
         */

        var isShuttingDown = false;

        function distort(channels) {
          // stop animating on $destroy
          if (isShuttingDown) { return; }

          // ~8% chance this will happen, if it doesn't normalize the elements
          if (Math.random() > 0.0825) {
            TweenMax.to(element,  0.16, {opacity: 1});
            TweenMax.to(channels, 0.16, {opacity: 0});
            requestAnimationFrame(function() {
              distort(channels);
            });
            return;
          }

          // opacity distortion
          var opacity = getRandomArbitrary(0.66, 1);

          // decrease root opacity
          TweenMax.to(element, 0.16, { opacity: Math.max(0.33, 1 - opacity) });

          // increase chromatic channel opacity and displace channel
          var fontSize = +element.css('font-size').replace('px', '');
          var variance = fontSize * 0.375;
          var x        = getRandomArbitrary(-variance, variance);
          var skewX    = getRandomArbitrary(-5.625, 5.625);
          // red channel
          TweenMax
            .to(channels[0], 0.16, {
              opacity: opacity,
              x:       -x,
              skewX:   skewX
            });
          // blue channel
          TweenMax
            .to(channels[1], 0.16, {
              opacity: opacity,
              x:       x,
              skewX:   skewX
            });

          // animate
          requestAnimationFrame(function() {
            distort(channels);
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
