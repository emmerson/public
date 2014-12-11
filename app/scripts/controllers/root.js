'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('RootCtrl', function ($scope) {
    /**
     * Broadcast "viewLoaded" events.
     */

    $scope.$on('$viewContentLoaded', function() {
      $scope.$broadcast('viewLoaded');
    });
  });
