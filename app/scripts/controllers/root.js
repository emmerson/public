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
    $scope.$on('$includeContentLoaded', function(e, src) {
      console.log(arguments);
      console.log(e.targetScope.selector);
    });

    $scope.$on('$viewContentLoaded', function(e) {
      console.log(arguments);
      console.log(e.targetScope.routeName);
    });
  });
