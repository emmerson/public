'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('StatusCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
