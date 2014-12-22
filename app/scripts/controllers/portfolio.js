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
        description: 'A recreation of Valve’s VGUI2 theme.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Counter-Strike: Source Weapons',
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
        description: 'No need to request this anymore.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Melonnade',
        description: 'A grenade with an explosive fruity blast.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'The Manhattan Grenade',
        description: 'Places the power of Dr. Manhattan into a compact ' +
                     'explosive device.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'The Time Grenade',
        description: 'Adds a time manipulator grenade to Garry’s Mod.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Altimeter HUD Element',
        description: 'Adds an altimeter HUD element.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Christmas Lights',
        description: 'Adds explosive holiday cheer in pistol form.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Fall Damage',
        description: 'Adds the Source SDK calculations for fall damage.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'HEV Extensions',
        description: 'Extends the functionality of the HEV suit.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Boomstick',
        description: 'Adds a stick with an explosive temper.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Overwatch Military Issue Dark Energy Rifle',
        description: 'Adds an automatic dark energy assault rifle.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Your Head A Splode',
        description: 'It’s what it does.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Vortex Weaponry',
        description: 'Adds a dimension defying weaponry.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Half-Life 2 Orange Box Weapons',
        description: 'Adds a new set of HL2 weapons which use the OB ' +
                     'particle system.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Grenadegun',
        description: 'Adds a grenade lobbing shotgun.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Boxnade',
        description: 'Adds an explosive enlarging box.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Pulse-Shotgun',
        description: 'Adds a dark-energy powered shotgun.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Water Explosive',
        description: 'Adds an explosive barrel charge.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Assault SMG',
        description: 'Adds a rapid fire machine gun.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Armed Attachments',
        description: 'Adds a base SWEP which utilizes a Crysis-styled ' +
                     'attachment system.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Quick Menu',
        description: 'Adds a Crysis-esque STool/Weapons menu.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'NanoHEV',
        description: 'Adds nanosuit features to your HEV suit.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Language Fixes',
        description: 'Adds natural language to undefined values.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Essential STools',
        description: 'Adds frequently used scripted tools.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Sandbox Gravity Gun',
        description: 'Adds an option to give players a gravity gun, ' +
                     'regardless of starting with weapons or not.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Drop Primary',
        description: 'Adds the "drop" command from CS:S.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Ownership HUD for Simple Prop Protection',
        description: 'Replaces Simple Prop Protection’s HUD with a HL2 variant.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Ghosting Fade System',
        description: 'Fades out all ghosts after time, to prevent dormant ' +
                     'ghosts from collecting.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Death Ragdolls',
        description: 'Adds server-side death ragdolls for players and NPCs.'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'PLGL',
        small:       '(“Present Launching Grenade Launcher”)',
        description: 'Adds a grenade launcher with holiday cheer as its ' +
                     'primary ammunition!'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Engines and SDKs',
        for:         'Garry’s Mod',
        name:        'Scripted Weapon Bases',
        description: 'Adds HL2 scripted weapon bases.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Sandbox Setting Defaults',
        description: 'Resets sandbox limits and ConVars to their defaults on ' +
                     'server initialization.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Insurgency Spawn Points',
        description: 'Adds working spawn points to Insurgency maps.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Ion Cannon',
        description: 'Adds the dark energy-powered cannon from EP2.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Mounted Pulse-Rifle',
        description: 'Adds a handheld mounted Pulse-Rifle.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Watermelon',
        description: 'Adds a tossable fruit.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Thruster',
        description: 'Adds a shoulder mounted thruster.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Ragdoll Fade System',
        description: 'Fades out all client-side ragdolls after time, to ' +
                     'prevent dormant corpses from collecting.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Airboat Gun',
        description: 'Adds a detached chopper gun.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Player Clothing',
        description: 'Adds selectable clothing to player models.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Reverse Engineering',
        for:         'Garry’s Mod',
        name:        'SteamID to IP',
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
        description: 'Fixes lights from showing up through the world.'
      },
      {
        category:    'Development',
        when:        2013,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        '-',
        small:       '(“Dash”)',
        description: 'Adds real-time scripting to Garry’s Mod.'
      },
      {
        category:    'Development',
        when:        2013,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Trouble in Terrorist Town: Connextion',
        description: 'Trouble in Terrorist Town: Connextion is a ' +
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
        description: 'BASS Audio Library bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2012,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lclass',
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
        description: 'Open Steamworks bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2012,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lsapi',
        description: 'Microsoft Speech API bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2012,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lwinapi',
        description: 'Windows API bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2012,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'lwolframalpha',
        description: 'Wolfram|Alpha Webservice API bindings for Lua 5.1'
      },
      {
        category:    'Development',
        when:        2011,
        type:        'Libraries and APIs',
        for:         'Lua 5.1',
        name:        'steamcommunity-utils',
        description: 'A toolkit in Lua for interacting with Steam Community'
      },
      {
        category:    'Development',
        when:        2012,
        type:        'Reverse Engineering',
        for:         'Steam’s Web API',
        name:        'Steam Web Lua API',
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
        description: 'An API wrapper for interfacing with Steam’s Web API ' +
                     'using PHP'
      },
      // Websites
      {
        category:    'Development & Design',
        when:        2014,
        type:        'Websites and Webapps',
        for:         'Andrew McWatters',
        name:        'andrewmcwatters.com (2015)',
        concept:     'https://raw.githubusercontent.com/andrewmcwatters/portfolio/master/andrewmcwatters.com.r208.portfolio.png',
        description: 'Personal website, portfolio, and résumé'
      },
      {
        category:    'Development & Design',
        when:        2014,
        type:        'Websites and Webapps',
        for:         'Dota 2',
        name:        'Metrics Hunter',
        description: 'The First Open-Source Decentralized Dota 2 ' +
                     'Statistics Tracker'
      },
      {
        category:    'Development & Design',
        when:        2013,
        type:        'Websites and Webapps',
        for:         'Microsoft',
        name:        'Binocular',
        description: 'Internal project tracker for small teams'
      },
      {
        category:    'Development & Design',
        when:        2013,
        type:        'Websites and Webapps',
        for:         'Andrew McWatters',
        name:        'andrewmcwatters.com (2013)',
        description: 'Personal website, portfolio, and résumé'
      },
      {
        category:    'Development & Design',
        when:        2013,
        type:        'Websites and Webapps',
        for:         'Adam & Eve’s Alter',
        name:        'Let the Koran Speak',
        description: 'Religious educational program'
      },
      {
        category:    'Development & Design',
        when:        2013,
        type:        'Websites and Webapps',
        for:         'boo1ean GmbH',
        name:        'Individual Executive Layer',
        description: 'Product website for boo1ean’s digital rights ' +
                     'management software'
      },
      {
        category:    'Development & Design',
        when:        2013,
        type:        'Websites and Webapps',
        for:         'boo1ean GmbH',
        name:        'boo1ean.de',
        description: 'Company website'
      },
      {
        category:    'Development & Design',
        when:        2012,
        type:        'Websites and Webapps',
        for:         'Northside church of Christ',
        name:        'northsidechurchofchrist.org',
        small:       'Redesign Proposal',
        description: 'Church website'
      },
      {
        category:    'Development & Design',
        when:        2012,
        type:        'Websites and Webapps',
        for:         'Elpis Host',
        name:        'elpishost.com',
        description: 'Game server provider website'
      },
      {
        category:    'Development & Design',
        when:        2012,
        type:        'Websites and Webapps',
        for:         'Andrew McWatters',
        name:        'andrewmcwatters.com (2012)',
        description: 'Personal website, portfolio, and résumé'
      },
      {
        category:    'Development & Design',
        when:        2012,
        type:        'Websites and Webapps',
        for:         'Phoenix Faction Studios',
        name:        'phxfaction.com',
        description: 'Game journalism blog'
      },
      {
        category:    'Development & Design',
        when:        2011,
        type:        'Websites and Webapps',
        for:         'Phoenixerve',
        name:        'phoenixerve.com',
        description: 'Game server provider website'
      },
      {
        category:    'Development & Design',
        when:        2011,
        type:        'Websites and Webapps',
        for:         'Andrew McWatters',
        name:        'andrewmcwatters.com (2011)',
        description: 'Personal website, portfolio, and résumé'
      },
      {
        category:    'Development & Design',
        when:        2011,
        type:        'Websites and Webapps',
        for:         'Brohoster',
        name:        'brohoster.com',
        description: 'Game server provider website'
      },
      // Minecraft
      {
        category:    'Development',
        when:        2013,
        type:        'Addon',
        for:         'Minecraft',
        name:        'PluginSync',
        description: 'A Bukkit plugin to sync your server to a plugin depot.'
      },
      // Desktop Services
      {
        category:    'Development',
        when:        2013,
        type:        'Application',
        for:         'Windows',
        name:        'scrnshot',
        description: 'A simple screenshot tool'
      }
    ];

    /**
     * Category count.
     */

    $scope.count = function(type) {
      return Lazy($scope.projects).where({type: type}).toArray().length;
    };

    /**
     * Functional "when" helper.
     */

    function when(project) {
      return project.when;
    }

    /**
     * Descending chronology.
     */

    var descending = true;

    /**
     * Filter results.
     */

    $scope.filter = function(type) {
      $scope.results = Lazy($scope.projects);
      if (type) {
        $scope.results = $scope.results.where({type: type});
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
