/*!
 * /public
 * From the desk of Andrew McWatters
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * Copyright 2014.
 */
(function ($, window, document, undefined) {
    'use strict';

    var google     = window.google;
    var center     = new google.maps.LatLng(33.6054149, -112.125051);
    var map;
    var DOMOverlay = window.DOMOverlay;
    var overlay;

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
            center: center,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.TERRAIN,
            zoom: 3
        };
        map = new google.maps.Map(document.getElementById('map'),
                  mapOptions);
        map.mapTypes.set('Planimeter', styledMap);
        map.setMapTypeId('Planimeter');

        overlay = new DOMOverlay();

        if (google.maps.weather) {
            var cloudLayer = new google.maps.weather.CloudLayer();
            cloudLayer.setMap(map);
        }

        resize();

        initializeTeam();
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    function resize() {
        requestAnimationFrame(function() {
            if (window.matchMedia('(max-width: 1035px)').matches) {
                map.panTo(center);
                map.setZoom(3);
            } else {
                map.panTo(center);
                map.setZoom(4);
            }
        });
    }
    google.maps.event.addDomListener(window, 'resize', resize);

    function setDropPinActive($member) {
        requestAnimationFrame(function() {
            $('#map .member').removeClass('active');
            requestAnimationFrame(function() {
                var latlng = $member.data('latlng');
                $('#map .member[data-latlng=\"' + latlng + '\"]').addClass('active');
            });
        });
    }

    function setLiActive($member) {
        requestAnimationFrame(function() {
            $('#team-list .member').removeClass('active');
            requestAnimationFrame(function() {
                $member.addClass('active');
                setDropPinActive($member);
            });
        });
    }

    function panToMember(e) {
        var $member = $(e.target);
        if ($member.hasClass('active')) {
            return;
        }

        setLiActive($member);

        var latlng = $member.data('latlng').split(',');
        map.panTo(new google.maps.LatLng(+latlng[0], +latlng[1]));
    }

    function initializeTeam() {
        $('#team .member').each(function(index, item) {
            overlay.add(item);
        });
        overlay.setMap(map);

        $('#team-list .member').each(function(index, item) {
            $(item).on('click', panToMember);
        });
    }
})(Zepto || jQuery, window, document);
