'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:IssuesCtrl
 * @description
 * # IssuesCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('IssuesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
