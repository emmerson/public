'use strict';

/**
 * @ngdoc overview
 * @name publicApp
 * @description
 * # publicApp
 *
 * Main module of the application.
 */
angular
  .module('publicApp', [
    'ngRoute'
  ])

  /**
   * Configure routes.
   */

  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        redirectTo: '/'
      })
      .when('/wiwo', {
        templateUrl: 'views/wiwo.html',
        controller: 'WiwoCtrl'
      })
      .when('/portfolio', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl'
      })
      .when('/theme', {
        templateUrl: 'views/theme.html'
      })
      .when('/404', {
        templateUrl: 'views/404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });
  })

  /**
   * Configure application deep linking.
   */

  .config(function ($locationProvider) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');
  })

  /**
  * Instantiate FastClick.
  */

  .run(function($window, $document) {
    var FastClick = $window.FastClick;
    FastClick.attach($document[0].body);
  });
