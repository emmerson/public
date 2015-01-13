'use strict';

/**
 * @ngdoc service
 * @name publicApp.socket
 * @description
 * # socket
 * Factory in the publicApp.
 */
angular.module('publicApp')
  .factory('socket', function ($window, socketFactory) {
    /**
     * Module dependencies.
     */

    var io = $window.io;

    var ioSocket = io.connect('http://andrewmcwatters.com:80/status');
    return socketFactory({
      ioSocket: ioSocket
    });
  });
