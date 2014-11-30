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
    $scope.$on('$includeContentLoaded', function(e) {
      var selector = e.targetScope.selector;
      console.log(selector);
    });

    $scope.$on('$viewContentLoaded', function(e) {
      var routeName = e.targetScope.routeName;
      console.log(routeName);
    });
  });
