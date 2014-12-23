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
      // Garry’s Mod
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'VGUI2 Skin',
        language:    'Lua',
        description: 'A recreation of Valve’s VGUI2 theme.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Counter-Strike: Source Weapons',
        language:    'Lua',
        description: 'CS:S Weapons!'
      },
      {
        category:    'Design',
        when:        2009,
        type:        'Level',
        for:         'Garry’s Mod',
        name:        'gm_construct_night',
        description: 'A nighttime variant of gm_construct.'
      },
      {
        category:    'Design',
        when:        2009,
        type:        'Level',
        for:         'Garry’s Mod',
        name:        'gm_flatgrass_night',
        description: 'A nighttime variant of gm_flatgrass.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'An AK47 That Shoots Babies',
        language:    'Lua',
        description: 'Based on an inside joke from Facepunch Studios Forums,' +
                     'this addon adds an AK47 to Garry’s Mod that shoots ' +
                     'babies.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Melonnade',
        language:    'Lua',
        description: 'A grenade with an explosive fruity blast.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'The Manhattan Grenade',
        language:    'Lua',
        description: 'Places the power of Dr. Manhattan into a compact ' +
                     'explosive device.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'The Time Grenade',
        language:    'Lua',
        description: 'Adds a time manipulator grenade to Garry’s Mod.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Altimeter HUD Element',
        language:    'Lua',
        description: 'Adds an altimeter HUD element.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Christmas Lights',
        language:    'Lua',
        description: 'Adds explosive holiday cheer in pistol form.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Fall Damage',
        language:    'Lua',
        description: 'Adds the Source SDK calculations for fall damage.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'HEV Extensions',
        language:    'Lua',
        description: 'Extends the functionality of the HEV suit.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Boomstick',
        language:    'Lua',
        description: 'Adds a stick with an explosive temper.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Overwatch Military Issue Dark Energy Rifle',
        language:    'Lua',
        description: 'Adds an automatic dark energy assault rifle.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Your Head A Splode',
        language:    'Lua',
        description: 'It’s what it does.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Vortex Weaponry',
        language:    'Lua',
        description: 'Adds a dimension defying weaponry.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Half-Life 2 Orange Box Weapons',
        language:    'Lua',
        description: 'Adds a new set of HL2 weapons which use the OB ' +
                     'particle system.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Grenadegun',
        language:    'Lua',
        description: 'Adds a grenade lobbing shotgun.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Boxnade',
        language:    'Lua',
        description: 'Adds an explosive enlarging box.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Pulse-Shotgun',
        language:    'Lua',
        description: 'Adds a dark-energy powered shotgun.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Water Explosive',
        language:    'Lua',
        description: 'Adds an explosive barrel charge.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Assault SMG',
        language:    'Lua',
        description: 'Adds a rapid fire machine gun.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Armed Attachments',
        language:    'Lua',
        description: 'Adds a base SWEP which utilizes a Crysis-styled ' +
                     'attachment system.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Quick Menu',
        language:    'Lua',
        description: 'Adds a Crysis-esque STool/Weapons menu.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'NanoHEV',
        language:    'Lua',
        description: 'Adds nanosuit features to your HEV suit.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Language Fixes',
        language:    'Lua',
        description: 'Adds natural language to undefined values.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Essential STools',
        language:    'Lua',
        description: 'Adds frequently used scripted tools.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Sandbox Gravity Gun',
        language:    'Lua',
        description: 'Adds an option to give players a gravity gun, ' +
                     'regardless of starting with weapons or not.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Drop Primary',
        language:    'Lua',
        description: 'Adds the "drop" command from CS:S.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Ownership HUD for Simple Prop Protection',
        language:    'Lua',
        description: 'Replaces Simple Prop Protection’s HUD with a HL2 variant.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Ghosting Fade System',
        language:    'Lua',
        description: 'Fades out all ghosts after time, to prevent dormant ' +
                     'ghosts from collecting.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Death Ragdolls',
        language:    'Lua',
        description: 'Adds server-side death ragdolls for players and NPCs.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'PLGL',
        small:       '(“Present Launching Grenade Launcher”)',
        language:    'Lua',
        description: 'Adds a grenade launcher with holiday cheer as its ' +
                     'primary ammunition!'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Engines and SDKs',
        for:         'Garry’s Mod',
        name:        'Scripted Weapon Bases',
        language:    'Lua',
        repository:  'https://code.google.com/p/swep-bases/',
        description: 'Adds HL2 scripted weapon bases.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Sandbox Setting Defaults',
        language:    'Lua',
        description: 'Resets sandbox limits and ConVars to their defaults on ' +
                     'server initialization.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Insurgency Spawn Points',
        language:    'Lua',
        description: 'Adds working spawn points to Insurgency maps.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Ion Cannon',
        language:    'Lua',
        description: 'Adds the dark energy-powered cannon from EP2.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Mounted Pulse-Rifle',
        language:    'Lua',
        description: 'Adds a handheld mounted Pulse-Rifle.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Watermelon',
        language:    'Lua',
        description: 'Adds a tossable fruit.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Thruster',
        language:    'Lua',
        description: 'Adds a shoulder mounted thruster.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Ragdoll Fade System',
        language:    'Lua',
        description: 'Fades out all client-side ragdolls after time, to ' +
                     'prevent dormant corpses from collecting.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Airboat Gun',
        language:    'Lua',
        description: 'Adds a detached chopper gun.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Player Clothing',
        language:    'Lua',
        description: 'Adds selectable clothing to player models.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Reverse Engineering',
        for:         'Garry’s Mod',
        name:        'SteamID to IP',
        language:    'Lua',
        description: 'Converts Garry’s Mod API to use fake SteamIDs (used ' +
                     'for authentication and player uniqueness) based on IP ' +
                     'addresses, thus allowing players to play for free.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Light IgnoreZ Fix',
        language:    'Lua',
        description: 'Fixes lights from showing up through the world.'
      },
      {
        category:    'Development',
        when:        2013,
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
        type:        'Game',
        for:         'Source Engine',
        name:        'Half-Life 2: Sandbox',
        language:    'C++',
        description: 'Half-Life 2: Sandbox is an open-source sandbox ' +
                     'modification of the Source Engine which provides Lua ' +
                     'as a scripting platform for developers to quickly ' +
                     'prototype game ideas.'
      },
      // Knight Game II
      {
        category:    'Development',
        when:        2011,
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
        type:        'Website',
        for:         'Andrew McWatters',
        name:        'andrewmcwatters.com (2015)',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/andrewmcwatters.com.r208.portfolio.png',
        description: 'Personal website, portfolio, and résumé'
      },
      {
        category:    'Development & Design',
        when:        2014,
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
        type:        'Website',
        for:         'Microsoft',
        name:        'Binocular',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/binocular.r61.portfolio.png',
        description: 'Internal project tracker for small teams'
      },
      {
        category:    'Development & Design',
        when:        2013,
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
        type:        'Website',
        for:         'boo1ean GmbH',
        name:        'boo1ean.de',
        language:    'CSS',
        description: 'Company website'
      },
      {
        category:    'Development & Design',
        when:        2012,
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
        type:        'Website',
        for:         'Brohoster',
        name:        'brohoster.com',
        language:    'CSS',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/brohoster.com.r11.portfolio.png',
        description: 'Game server provider website'
      },
      // Minecraft
      {
        category:    'Development',
        when:        2013,
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
     * Functional "when" helper.
     */

    function when(project) {
      return project.when;
    }

    /**
     * Filter results.
     */

    $scope.filter = function(type) {
      $scope.activeFilter = type;
      $scope.results      = Lazy($scope.projects);

      if (type) {
        $scope.results =
        $scope.results
          .where({type: type});
      }

      $scope.years = Lazy($scope.results.toArray())
        .sortBy(when, descending)
        .pluck('when')
        .uniq()
        .toArray();

      $scope.results = $scope.results
        .groupBy(when)
        .toObject();
    }; $scope.filter();
  });
