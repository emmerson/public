'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('RootCtrl', function ($scope, $window, $document, $rootScope) {
    /**
     * Module dependencies.
     */

    var async = $window.async;

    /**
     * Handle "$includeContentLoaded" events.
     */

    function onincludecontentloaded(el) {
      return function(callback) {
        var remove = $scope.$on('$includeContentLoaded', function(e) {
          var selector = e.targetScope.selector;
          if (selector === el) {
            remove();
            callback(null);
          }
        });
      };
    }

    /**
     * Handle "$viewContentLoaded" events.
     */

    function onviewcontentloaded(/*route*/) {
      return function(callback) {
        var remove = $scope.$on('$viewContentLoaded', function(/*e*/) {
          // var routeName = e.targetScope.routeName;
          // if (routeName === route) {
            remove();
            callback(null);
          // }
        });
      };
    }


    /**
     * Handle "load" events.
     */

    function onload() {
      return function(callback) {
        angular.element($window).one('load', function() {
          var background = $document[0].getElementById('background');
          angular.element(background).addClass('in');
          callback(null);
        });
      };
    }

    /**
     * Broadcast "initialize" event.
     */

    async.parallel([
      onincludecontentloaded('header'),
      onviewcontentloaded(),
      onincludecontentloaded('footer'),
      onload()
    ], function() {
      $scope.$broadcast('initialize');
      $rootScope.initialized = true;
    });
  });
