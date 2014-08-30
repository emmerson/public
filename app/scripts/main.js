/*!
 * /public
 * From the desk of Andrew McWatters
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * Copyright 2014.
 */
(function ($, window, document, undefined) {
    'use strict';

    var TweenMax        = window.TweenMax,
        RoughEase       = window.RoughEase,
        Quint           = window.Quint,
        andrewmcwatters = window.andrewmcwatters,
        FastClick       = window.FastClick;

    andrewmcwatters = (function () {
        function wasReferredFromHost() {
            if (document.referrer === '') {
                return false;
            }

            var referrer  = document.createElement('a');
            referrer.href = document.referrer;
            var location  = document.location;
            return location.hostname === referrer.hostname;
        }

        function initAnimations() {
            // Fade in the core elements, one after another, quickly.
            var selectors = [
                'header',
                'section',
                'footer'
            ];

            if (wasReferredFromHost()) {
                selectors.shift();
                selectors.pop();
            }

            var $elements = [];

            for (var i = selectors.length - 1; i >= 0; i--) {
                var $element = $(selectors[i]);
                $element.css('display', '');
                $element.css('opacity', 0);
                $elements.push($element);
            }

            $elements.reverse();

            TweenMax.staggerTo($elements, 0.8, {
                opacity: 1,
                delay: 0.2
            }, 0.1);
        }

        function flickerOutGrid() {
            var $grid = $('#grid');
            $grid.css('display', 'block');
            $grid.css('opacity', 1);
            $(window).one('load', function() {
                TweenMax.to($grid, 2, {
                    opacity: 0,
                    ease: RoughEase.ease.config({
                        strength: 16,
                        points: 80,
                        template: Quint.easeOut,
                        taper: 'out',
                        clamp: true
                    }),
                    onComplete: fadeInGridPoints
                });
            });
        }

        function fadeInGridPoints() {
            var $grid = $('#grid');
            $grid.addClass('points');
            TweenMax.to($grid, 2, {
                opacity: 1,
                ease: Quint.easeOut
            });
        }

        function registerAnimations() {
            // Don't animate anything else if we came from another part
            // of the site.
            if (wasReferredFromHost()) {
                return;
            }

            // Flicker the grid out when everything finishes loading.
            flickerOutGrid();
        }

        function registerEventListeners() {
            var listeners = document.eventListeners;
            for (var event in listeners) {
                if (listeners.hasOwnProperty(event)) {
                    for (var selector in listeners[event]) {
                        if (selector === 'window') {
                            $(window).on(event, listeners[event].window);
                        } else {
                            $(selector).on(event, listeners[event][selector]);
                        }
                    }
                }
            }
        }

        return {
            wasReferredFromHost:    wasReferredFromHost,
            initAnimations:         initAnimations,
            registerAnimations:     registerAnimations,
            registerEventListeners: registerEventListeners
        };
    })();

    window.andrewmcwatters = andrewmcwatters;

    $(function() {
        FastClick.attach(document.body);

        TweenMax.defaultEase      = Quint.easeOut;
        TweenMax.defaultOverwrite = 'all';

        var am = andrewmcwatters;
        am.registerEventListeners();

        if (am.init) {
            am.init();
        } else {
            // Register animations to fire on load.
            am.registerAnimations();
            am.initAnimations();
        }
    });
})(Zepto, window, document);
