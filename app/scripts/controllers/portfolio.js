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
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'VGUI2 Skin',
        language:    'Lua',
        download:    'vgui2_skin.zip',
        description: 'A recreation of Valve’s VGUI2 theme.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Counter-Strike: Source Weapons',
        language:    'Lua',
        download:    'counter-strike_source_weapons.zip',
        description: 'CS:S Weapons!'
      },
      {
        category:    'Design',
        when:        2009,
        avocational: true,
        type:        'Level',
        for:         'Garry’s Mod',
        name:        'gm_construct_night',
        download:    'gm_construct_night.zip',
        description: 'A nighttime variant of gm_construct.'
      },
      {
        category:    'Design',
        when:        2009,
        avocational: true,
        type:        'Level',
        for:         'Garry’s Mod',
        name:        'gm_flatgrass_night',
        download:    'gm_flatgrass_night.zip',
        description: 'A nighttime variant of gm_flatgrass.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Motivational Orange',
        language:    'Lua',
        download:    'motivational_orange.zip',
        description: 'Adds a talking orange that follows you around and ' +
                     'motivates you to greatness lest ye eat it.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'An AK47 That Shoots Babies',
        language:    'Lua',
        download:    'an_ak47_that_shoots_babies.zip',
        description: 'Based on an inside joke from Facepunch Studios Forums,' +
                     'this addon adds an AK47 to Garry’s Mod that shoots ' +
                     'babies.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Melonnade',
        language:    'Lua',
        download:    'melonnade.zip',
        description: 'A grenade with an explosive fruity blast.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'The Manhattan Grenade',
        language:    'Lua',
        download:    'the_manhattan_grenade.zip',
        description: 'Places the power of Dr. Manhattan into a compact ' +
                     'explosive device.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'The Time Grenade',
        language:    'Lua',
        download:    'the_time_grenade.zip',
        description: 'Adds a time manipulator grenade to Garry’s Mod.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Altimeter HUD Element',
        language:    'Lua',
        download:    'altimeter_hud_element.zip',
        description: 'Adds an altimeter HUD element.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Christmas Lights',
        language:    'Lua',
        download:    'christmas_lights.zip',
        description: 'Adds explosive holiday cheer in pistol form.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Fall Damage',
        language:    'Lua',
        download:    'fall_damage.zip',
        description: 'Adds the Source SDK calculations for fall damage.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'HEV Extensions',
        language:    'Lua',
        download:    'hev_extensions.zip',
        description: 'Extends the functionality of the HEV suit.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Boomstick',
        language:    'Lua',
        download:    'boomstick.zip',
        description: 'Adds a stick with an explosive temper.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Overwatch Military Issue Dark Energy Rifle',
        language:    'Lua',
        download:    'overwatch_military_issue_dark_energy_rifle.zip',
        description: 'Adds an automatic dark energy assault rifle.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Your Head A Splode',
        language:    'Lua',
        download:    'your_head_a_splode.zip',
        description: 'Adds the ability to blow up your head.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Vortex Weaponry',
        language:    'Lua',
        download:    'vortex_weaponry.zip',
        description: 'Adds a dimension defying weaponry.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Half-Life 2 Orange Box Weapons',
        language:    'Lua',
        download:    'hl2_orangebox.zip',
        description: 'Adds a new set of HL2 weapons which use the OB ' +
                     'particle system.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Grenadegun',
        language:    'Lua',
        download:    'grenadegun.zip',
        description: 'Adds a grenade lobbing shotgun.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Boxnade',
        language:    'Lua',
        download:    'boxnade.zip',
        description: 'Adds an explosive enlarging box.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Pulse-Shotgun',
        language:    'Lua',
        download:    'pulse-shotgun.zip',
        description: 'Adds a dark-energy powered shotgun.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Water Explosive',
        language:    'Lua',
        download:    'water_explosive.zip',
        description: 'Adds an explosive barrel charge.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Assault SMG',
        language:    'Lua',
        download:    'assault_smg.zip',
        description: 'Adds a rapid fire machine gun.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Armed Attachments',
        language:    'Lua',
        download:    'armed_attachments.zip',
        description: 'Adds a base SWEP which utilizes a Crysis-styled ' +
                     'attachment system.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Quick Menu',
        language:    'Lua',
        download:    'quick_menu.zip',
        description: 'Adds a Crysis-esque STool/Weapons menu.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'NanoHEV',
        language:    'Lua',
        download:    'nanohev.zip',
        description: 'Adds nanosuit features to your HEV suit.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Language Fixes',
        language:    'Lua',
        download:    'language_fixes.zip',
        description: 'Adds natural language to undefined values.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Essential STools',
        language:    'Lua',
        download:    'essential_stools.zip',
        description: 'Adds frequently used scripted tools.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Sandbox Gravity Gun',
        language:    'Lua',
        download:    'sbox_gravgun.zip',
        description: 'Adds an option to give players a gravity gun, ' +
                     'regardless of starting with weapons or not.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Drop Primary',
        language:    'Lua',
        download:    'drop_primary.zip',
        description: 'Adds the "drop" command from CS:S.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Ownership HUD for Simple Prop Protection',
        language:    'Lua',
        download:    'ownership_hud_for_simple_prop_protection.zip',
        description: 'Replaces Simple Prop Protection’s HUD with a HL2 variant.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Ghosting Fade System',
        language:    'Lua',
        download:    'ghosting_fade_system.zip',
        description: 'Fades out all ghosts after time, to prevent dormant ' +
                     'ghosts from collecting.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Death Ragdolls',
        language:    'Lua',
        download:    'death_ragdolls.zip',
        description: 'Adds server-side death ragdolls for players and NPCs.'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'PLGL',
        small:       '(“Present Launching Grenade Launcher”)',
        language:    'Lua',
        download:    'plgl_(present_launching_grenade_launcher).zip',
        description: 'Adds a grenade launcher with holiday cheer as its ' +
                     'primary ammunition!'
      },
      {
        category:    'Development',
        when:        2009,
        avocational: true,
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
        avocational: true,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Sandbox Setting Defaults',
        language:    'Lua',
        download:    'sandbox_setting_defaults.zip',
        description: 'Resets sandbox limits and ConVars to their defaults on ' +
                     'server initialization.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Insurgency Spawn Points',
        language:    'Lua',
        download:    'insurgency_spawn_points.zip',
        description: 'Adds working spawn points to Insurgency maps.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Ion Cannon',
        language:    'Lua',
        download:    'ion_cannon.zip',
        description: 'Adds the dark energy-powered cannon from EP2.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Mounted Pulse-Rifle',
        language:    'Lua',
        download:    'mounted_pulse-rifle.zip',
        description: 'Adds a handheld mounted Pulse-Rifle.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Watermelon',
        language:    'Lua',
        download:    'watermelon.zip',
        description: 'Adds a tossable fruit.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Thruster',
        language:    'Lua',
        download:    'thruster.zip',
        description: 'Adds a shoulder mounted thruster.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Interpolate Animation',
        language:    'Lua',
        download:    'interpolate_animation.zip',
        description: 'Fixes third-person player animation stuttering.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Ragdoll Fade System',
        language:    'Lua',
        download:    'ragdoll_fade_system.zip',
        description: 'Fades out all client-side ragdolls after time, to ' +
                     'prevent dormant corpses from collecting.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Airboat Gun',
        language:    'Lua',
        description: 'Adds a detached chopper gun.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Player Clothing',
        language:    'Lua',
        download:    'Player Clothing.zip',
        description: 'Adds selectable clothing to player models.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Reverse Engineering',
        for:         'Garry’s Mod',
        name:        'SteamID to IP',
        language:    'Lua',
        download:    'steamidtoip.zip',
        description: 'Converts Garry’s Mod API to use fake SteamIDs (used ' +
                     'for authentication and player uniqueness) based on IP ' +
                     'addresses.'
      },
      {
        category:    'Development',
        when:        2010,
        avocational: true,
        type:        'Patch',
        for:         'Garry’s Mod',
        name:        'Light IgnoreZ Fix',
        language:    'Lua',
        download:    'Light IgnoreZ Fix.zip',
        description: 'Fixes lights from showing up through the world.'
      },
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
        for:         'Microsoft',
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
