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
     * Handle "status" events.
     */

    socket.forward('status', $scope);
    $scope.$on('socket:status', function (event, status) {
      $scope.status = status;
    });
  });
