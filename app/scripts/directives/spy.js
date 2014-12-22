'use strict';

/**
 * @ngdoc directive
 * @name publicApp.directive:spy
 * @description
 * # spy
 */
angular.module('publicApp')
  .directive('spy', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var spy = attrs.spy;

        /**
         * Affix spy.
         */

        if (spy === 'affix') {
          var offset = {};
          if (element.data('offset-top'))    { offset.top    = +element.data('offset-top'); }
          if (element.data('offset-bottom')) { offset.bottom = +element.data('offset-bottom'); }
          element.affix({offset: offset});
        }
      }
    };
  });
