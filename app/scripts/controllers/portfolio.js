'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
