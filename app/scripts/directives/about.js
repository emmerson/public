'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:about
 * @description
 * # about
 */
angular.module('publicApp')
  .directive('about', function ($window) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {
        var TimelineMax  = $window.TimelineMax;
        var tl           = new TimelineMax();
        var eyebrow      = element[0].getElementsByClassName('eyebrow');
        var largeBlock   = element[0].getElementsByClassName('large-block');
        var callToAction = element[0].getElementsByClassName('call-to-action');
        tl
          .delay(0.161803399)
          .staggerFromTo([eyebrow, largeBlock], 0.4, {
              opacity: 0,
              y: -9
            }, {
              opacity: 1,
              y: 0
            }, 0.2)
          .fromTo(callToAction, 0.6, {
              opacity: 0,
              rotationX: 90,
              transformOrigin: '50% 50% -34.5px'
            }, {
              opacity: 1,
              rotationX: 0,
              transformOrigin: '50% 50% -34.5px'
            }, '-=0.4');
      }
    };
  });
