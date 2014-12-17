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
        type:        'Map',
        for:         'Garry’s Mod',
        name:        'gm_construct_night',
        description: 'A nighttime variant of gm_construct.'
      },
      {
        category:    'Design',
        when:        2009,
        type:        'Map',
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
        type:        'Addon',
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
        type:        'Addon',
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
        name:        'PLGL (Present Launching Grenade Launcher)',
        description: 'Adds a grenade launcher with holiday cheer as its ' +
                     'primary ammunition!'
      },
      {
        category:    'Development',
        when:        2009,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Scripted Weapon Bases',
        description: 'Adds HL2 scripted weapon bases.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Sandbox Setting Defaults',
        description: 'Resets sandbox limits and ConVars to their defaults on ' +
                     'server initialization.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
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
        type:        'Addon',
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
        name:        'Airboat Gun',
        description: 'Adds selectable clothing to player models.'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'SteamID to IP',
        description: 'Meta conversion of player IDs in Garry’s Mod'
      },
      {
        category:    'Development',
        when:        2010,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Light IgnoreZ Fix',
        description: 'Fixes lights from showing up through the world.'
      },
      {
        category:    'Development',
        when:        2013,
        type:        'Addon',
        for:         'Garry’s Mod',
        name:        'Trouble in Terrorist Town: Connextion',
        description: 'Trouble in Terrorist Town: Connextion is a ' +
                     'beautifully flat and modern redesign of TTT’s head-up ' +
                     'display and core UI. Connextion provides an impeccably ' +
                     'minimalistic, and brilliantly responsive HUD for you ' +
                     'personally or for any players you may be hosting in a ' +
                     'suspenseful skirmish.'
      }
    ];

    $scope.projectCount = $scope.projects.length;

    var descending = true;

    function when(project) {
      return project.when;
    }

    $scope.years = Lazy($scope.projects)
      .sortBy(when, descending)
      .pluck('when')
      .uniq()
      .toArray();

    $scope.projects = Lazy($scope.projects)
      .groupBy(when)
      .toObject();
  });
