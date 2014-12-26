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
    /**
     * What I’m Working On.
     */

    $scope.projects = [
      {
        id:     'planimeter',
        new:    true,
        type:   'Organization',
        name:   'Planimeter',
        logo:   'images/logo_planimeter.4ff78814.svg',
        since:  2014,
        what:   'International Development Team',
        href:   '/planimeter',
        target: '_self'
      },
      {
        id:     'vadventure',
        type:   'Game',
        name:   'Vertex Adventure',
        logo:   'images/logo_vadventure.dd082bfe.svg',
        since:  2013,
        what:   '2D Fantasy MMORPG',
     // href:   '/vadventure',
        target: '_self'
      },
      {
        id:     'grid',
        type:   'Engine',
        name:   'Grid',
        logo:   'images/logo_grid.19de7e30.svg',
        since:  2013,
        what:   '2D Game Engine',
     // href:   '/grid'
      },
      {
        id:     'axis',
        type:   'Platform',
        name:   'Axis',
        logo:   'images/logo_axis.08eef562.svg',
        since:  2013,
        what:   'Game Account Management System',
     // href:   '/axis'
      }
    ];
  });
