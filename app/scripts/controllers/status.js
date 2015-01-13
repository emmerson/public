'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('StatusCtrl', function ($scope, statusSocket) {
    /**
     * Handle "status" events.
     */

    statusSocket.forward('status', $scope);
    $scope.$on('socket:status', function (event, status) {
      $scope.status = status;
    });
  });
