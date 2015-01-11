'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('StatusCtrl', function ($scope, socket) {
    /**
     * Handle "usage" events.
     */

    socket.forward('usage', $scope);
    $scope.$on('socket:usage', function (event, usage) {
      $scope.usage = usage;
    });
  });
