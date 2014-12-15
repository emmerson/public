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
        type: 'Organization',
        name: 'Planimeter',
        logo: {
          src: 'images/logo_planimeter.4ff78814.svg',
          width: 215
        },
        since: 2014,
        what: 'International Development Team'
      },
      {
        type: 'Game',
        name: 'Vertex Adventure',
        logo: {
          src: 'images/logo_vadventure.dd082bfe.svg',
          width: 215
        },
        since: 2013,
        what: '2D Fantasy MMORPG'
      },
      {
        type: 'Engine',
        name: 'Grid',
        logo: {
          src: 'images/logo_grid.19de7e30.svg',
          width: 122
        },
        since: 2013,
        what: '2D Game Engine'
      },
      {
        type: 'Platform',
        name: 'Axis',
        logo: {
          src: 'images/logo_axis.08eef562.svg',
          width: 117
        },
        since: 2013,
        what: 'Game Account Management System'
      }
    ];
  });
