/*!
 * /public
 * From the desk of Andrew McWatters
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * Copyright 2014.
 */
(function ($, window, document, undefined) {
    'use strict';

    var google = window.google;
    var largeCenter  = new google.maps.LatLng(27, 0);
    var mediumCenter = new google.maps.LatLng(7, 0);
    var map;

    var styles = [
      {
        'elementType': 'labels',
        'stylers': [
          { 'visibility': 'off' }
        ]
      },{
        'stylers': [
          { 'hue': '#00ccff' },
          { 'saturation': -86 },
          { 'lightness': -80 }
        ]
      },{
        'featureType': 'water',
        'stylers': [
          { 'color': '#1f2324' }
        ]
      },{
        'featureType': 'administrative',
        'elementType': 'geometry.fill',
        'stylers': [
          { 'visibility': 'off' }
        ]
      }
    ];

    function initialize() {
        var styledMap = new google.maps.StyledMapType(styles, {
            name: 'Planimeter'
        });
        var mapOptions = {
            backgroundColor: 'transparent',
            center: largeCenter,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            zoom: 3
        };
        map = new google.maps.Map(document.getElementById('map'),
                  mapOptions);
        map.mapTypes.set('Planimeter', styledMap);
        map.setMapTypeId('Planimeter');
        resize();
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    function resize() {
        requestAnimationFrame(function() {
            if (window.matchMedia('(max-width: 1035px)').matches) {
                map.panTo(mediumCenter);
                map.setZoom(2);
            } else {
                map.panTo(largeCenter);
                map.setZoom(3);
            }
        });
    }
    google.maps.event.addDomListener(window, 'resize', resize);

})(Zepto || jQuery, window, document);
