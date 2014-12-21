'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:WiwoCtrl
 * @description
 * # WiwoCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('WiwoCtrl', function ($scope) {
    $scope.projects = [
      {
        id:   'planimeter',
        new:  true,
        type: 'Organization',
        name: 'Planimeter',
        logo: 'images/logo_planimeter.svg',
        since: 2014,
        what: 'International Development Team'
      },
      {
        id:   'vadventure',
        type: 'Game',
        name: 'Vertex Adventure',
        logo: 'images/logo_vadventure.svg',
        since: 2013,
        what: '2D Fantasy MMORPG'
      },
      {
        id:   'grid',
        type: 'Engine',
        name: 'Grid',
        logo: 'images/logo_grid.svg',
        since: 2013,
        what: '2D Game Engine'
      },
      {
        id:   'axis',
        type: 'Platform',
        name: 'Axis',
        logo: 'images/logo_axis.svg',
        since: 2013,
        what: 'Game Account Management System'
      }
    ];
  });
