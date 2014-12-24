/*jshint newcap: false */
'use strict';

/**
 * @ngdoc function
 * @name publicApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the publicApp
 */
angular.module('publicApp')
  .controller('PortfolioCtrl', function ($window, $scope) {
    /**
     * Module dependencies.
     */

    var Lazy = $window.Lazy;

    /**
     * Portfolio.
     */

    $scope.projects = [
      // Garry's Mod
      {
        category:    'Development',
        when:        2013,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        '-',
        small:       '(“Dash”)',
        language:    'Lua',
        download:    '-.zip',
        description: 'Adds real-time scripting to Garry’s Mod.'
      },
      {
        category:    'Development',
        when:        2013,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Trouble in Terrorist Town: Connection',
        language:    'Lua',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/Trouble%20In%20Terrorist%20Town%20Connection.r32.portfolio.png',
        description: 'Trouble in Terrorist Town: Connection is a ' +
                     'beautifully flat and modern redesign of TTT’s head-up ' +
                     'display and core UI.'
      },
      // Half-Life 2: Sandbox
      {
        category:    'Development',
        when:        2011,
        avocational: true,
        type:        'Game',
        for:         'Source Engine',
        name:        'Half-Life 2: Sandbox',
        language:    'C++',
        repository:  'https://code.google.com/p/hl2sb-src/',
        description: 'Half-Life 2: Sandbox is an open-source sandbox ' +
                     'modification of the Source Engine which provides Lua ' +
                     'as a scripting platform for developers to quickly ' +
                     'prototype game ideas.'
      },
      // Knight Game II
      {
        category:    'Development',
        when:        2011,
        avocational: true,
        type:        'Game',
        for:         'LÖVE',
        name:        'Knight Game II',
        language:    'Lua',
        description: 'A pixel-perfect recreation of Knight Game II from ' +
                     'Antics comic strip #203.'
      },
      // Lua Libraries
      {
        category:    'Development',
        when:        2012,
        avocational: true,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lbass',
        language:    'C',
        download:    'lbass.zip',
        description: 'BASS Audio Library bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2012,
        avocational: true,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lclass',
        language:    'Lua',
        repository:  'https://github.com/andrewmcwatters/lclass',
        description: 'lclass is a class implementation for Lua 5.1. It has ' +
                     'been designed to be the simplest, most ' +
                     'comprehensive, and smallest class implementation for ' +
                     'Lua.'
      },
      {
        category:    'Development',
        when:        2011,
        avocational: true,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lopensteamworks',
        language:    'C',
        download:    'lopensteamworks.zip',
        description: 'Open Steamworks bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2012,
        avocational: true,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lsapi',
        language:    'C',
        download:    'lsapi.zip',
        description: 'Microsoft Speech API bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2012,
        avocational: true,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lwinapi',
        language:    'C',
        download:    'lwinapi.zip',
        description: 'Windows API bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2012,
        avocational: true,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lwolframalpha',
        language:    'Lua',
        download:    'lwolframalpha.zip',
        description: 'Wolfram|Alpha Webservice API bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2011,
        avocational: true,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'steamcommunity-utils',
        language:    'Lua',
        download:    'steamcommunity-utils.zip',
        description: 'A toolkit in Lua for interacting with Steam Community'
      },
      {
        category:    'Development',
        when:        2012,
        avocational: true,
        type:        'Reverse Engineering',
        for:         'Steam’s Web API',
        name:        'Steam Web Lua API',
        language:    'Lua',
        download:    'steamweb-lua-api.zip',
        description: 'The Steam Web Lua API is a small library originally ' +
                     'designed to provide the web interfaces utilized in ' +
                     'Steam Mobile. These interfaces were reverse ' +
                     'engineered before Steam Mobile had been officially ' +
                     'released, during the application’s beta.'
      },
      {
        category:    'Development',
        when:        2014,
        avocational: true,
        type:        'Libraries and APIs',
        for:         'PHP',
        name:        'Steam Web PHP API',
        language:    'PHP',
        download:    'steamweb-php-api.zip',
        description: 'An API wrapper for interfacing with Steam’s Web API ' +
                     'using PHP'
      },
      // Websites
      {
        category:    'Development & Design',
        when:        2014,
        avocational: false,
        type:        'Website',
        for:         'Andrew McWatters',
        name:        'andrewmcwatters.com (2014)',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/andrewmcwatters.com.r208.portfolio.png',
        description: 'Personal website, portfolio, and résumé'
      },
      {
        category:    'Development & Design',
        when:        2014,
        avocational: true,
        type:        'Website',
        for:         'Dota 2',
        name:        'Metrics Hunter',
        language:    'PHP',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/metrics-hunter.r34.portfolio.r2.png',
        description: 'The First Open-Source Decentralized Dota 2 ' +
                     'Statistics Tracker'
      },
      {
        category:    'Development & Design',
        when:        2013,
        avocational: false,
        type:        'Website',
        name:        'Binocular',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/binocular.r61.portfolio.png',
        description: 'Internal project tracker for small teams'
      },
      {
        category:    'Development & Design',
        when:        2013,
        avocational: false,
        type:        'Website',
        for:         'Andrew McWatters',
        name:        'andrewmcwatters.com (2013)',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/andrewmcwatters.com.r159.portfolio.png',
        description: 'Personal website, portfolio, and résumé'
      },
      {
        category:    'Development & Design',
        when:        2013,
        avocational: false,
        type:        'Website',
        for:         'Adam & Eve’s Alter',
        name:        'Let the Koran Speak',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/letthekoranspeak.com.r39.portfolio.png',
        description: 'Religious educational program'
      },
      {
        category:    'Development & Design',
        when:        2013,
        avocational: false,
        type:        'Website',
        for:         'boo1ean GmbH',
        name:        'Individual Executive Layer',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/I.E.L.r47.portfolio.png',
        description: 'Product website for boo1ean’s digital rights ' +
                     'management software'
      },
      {
        category:    'Development & Design',
        when:        2013,
        avocational: false,
        type:        'Website',
        for:         'boo1ean GmbH',
        name:        'boo1ean.de',
        language:    'CSS',
        description: 'Company website'
      },
      {
        category:    'Development & Design',
        when:        2012,
        avocational: true,
        type:        'Website',
        for:         'Northside church of Christ',
        name:        'northsidechurchofchrist.org',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/northsidechurchofchrist.org.r35.portfolio.png',
        small:       'Redesign Proposal',
        description: 'Church website'
      },
      {
        category:    'Development & Design',
        when:        2012,
        avocational: false,
        type:        'Website',
        for:         'Elpis Host',
        name:        'elpishost.com',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/northsidechurchofchrist.org.r35.portfolio.png',
        description: 'Game server provider website'
      },
      {
        category:    'Development & Design',
        when:        2012,
        avocational: false,
        type:        'Website',
        for:         'Andrew McWatters',
        name:        'andrewmcwatters.com (2012)',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/andrewmcwatters.com.r85.portfolio.png',
        description: 'Personal website, portfolio, and résumé'
      },
      {
        category:    'Development & Design',
        when:        2012,
        avocational: false,
        type:        'Website',
        for:         'Phoenix Faction Studios',
        name:        'phxfaction.com',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/phoenixfaction.com.r60.portfolio.png',
        description: 'Game journalism blog'
      },
      {
        category:    'Development & Design',
        when:        2011,
        avocational: false,
        type:        'Website',
        for:         'Phoenixerve',
        name:        'phoenixerve.com',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/phoenixerve.com.r19.portfolio.png',
        description: 'Game server provider website'
      },
      {
        category:    'Development & Design',
        when:        2011,
        avocational: false,
        type:        'Website',
        for:         'Andrew McWatters',
        name:        'andrewmcwatters.com (2011)',
        language:    'CSS',
        concept:     'https://github.com/andrewmcwatters/portfolio/blob/master/andrewmcwatters.com.r6.portfolio.png',
        description: 'Personal website, portfolio, and résumé'
      },
      {
        category:    'Development & Design',
        when:        2011,
        avocational: false,
        type:        'Website',
        for:         'Brohoster',
        name:        'brohoster.com',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/brohoster.com.r11.portfolio.png',
        description: 'Game server provider website'
      },
      // Webapps
      {
        category:    'Development & Design',
        when:        2014,
        avocational: false,
        type:        'Webapp',
        for:         'NPL Construction Co.',
        name:        'NPL Time',
        language:    'CSS',
        concept:     'https://www.pixelapse.com/andrewmcwatters/projects/NPL%20Time',
        description: 'Mobile payroll iOS application'
      },
      // APIs
      {
        category:    'Development',
        when:        2014,
        avocational: false,
        type:        'Libraries and APIs',
        for:         'NPL Construction Co.',
        name:        'NPL API',
        language:    'JavaScript',
        description: 'Payroll, telemetrics, auditing, and internal file ' +
                     'sharing API'
      },
      // Minecraft
      {
        category:    'Development',
        when:        2013,
        avocational: true,
        type:        'Addon',
        for:         'Minecraft',
        name:        'PluginSync',
        language:    'Java',
        download:    'PluginSync.zip',
        description: 'A Bukkit plugin to sync your server to a plugin depot.'
      },
      // Desktop Services
      {
        category:    'Development',
        when:        2013,
        avocational: true,
        type:        'Application',
        for:         'Windows',
        name:        'scrnshot',
        language:    'C#',
        download:    'scrnshot.zip',
        description: 'A simple screenshot tool'
      }
    ];

    /**
     * Category count.
     */

    $scope.count = function(type) {
      return Lazy($scope.projects)
        .where({type: type})
        .toArray()
        .length;
    };

    /**
    * Functional "type" length helper.
    */

    function typeLength(project) {
      return $scope.count(project.type);
    }

    /**
    * Descending chronology.
    */

    var descending = true;

    /**
     * Categories.
     */

    $scope.categories = Lazy($scope.projects)
      .sortBy(typeLength, descending)
      .pluck('type')
      .uniq()
      .toArray();

    /**
     * Options.
     */

    $scope.options = {
      hideAvocational: true
    };

    $scope.$watch('options.hideAvocational', function() {
      $scope.filter($scope.activeFilter);
    });

    /**
     * Functional "when" helper.
     */

    function when(project) {
      return project.when;
    }

    /**
     * Filter results.
     */

    $scope.filter = function(type) {
      if (type === $scope.activeFilter) {
        $scope.activeFilter = null;
        $scope.filter();
        return;
      }

      // set active filter
      $scope.activeFilter = type;
      $scope.results      = Lazy($scope.projects);

      // filter by type
      if (type) {
        $scope.results =
        $scope.results
          .where({type: type});
      }

      // hide avocational projects
      if ($scope.options.hideAvocational) {
        $scope.results =
        $scope.results
          .where({avocational: false});
      }

      // list years of results
      $scope.years = Lazy($scope.results.toArray())
        .sortBy(when, descending)
        .pluck('when')
        .uniq()
        .toArray();

      // list results
      $scope.results = $scope.results
        .groupBy(when)
        .toObject();
    }; $scope.filter();

    /**
     * Result count.
     */

    $scope.resultCount = function() {
      var size = 0;
      function count(year) {size += year.length;}
      Lazy($scope.results)
        .each(count);
      return size;
    };
  });
