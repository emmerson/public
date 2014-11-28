'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('RootCtrl', function ($scope, $document) {
    /**
     * Handle "load" events.
     */

    var loaded = function(fragment) {
      return function() {
        var el = $document[0].getElementsByTagName(fragment).item(0);
        el.style.opacity = 0;

        $scope.$emit(fragment + 'Load');
      };
    };

    var onLoad = function(fragment) {
      return function(callback) {
        $scope.$on(fragment + 'Load', function() { callback(null); });
      };
    };
      
    /**
     * Scope callbacks.
     */

    $scope.onHeaderLoad = loaded('header');
    $scope.onMainLoad   = loaded('main');
    $scope.onFooterLoad = loaded('footer');

    async.parallel([
      onLoad('header'),
      onLoad('main'),
      onLoad('footer')
    ], function() {
      console.log('Loaded.');
    });
  });
