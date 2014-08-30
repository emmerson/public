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
            var referrer = document.referrer
                          .replace(location.protocol + '//', '');
            if (referrer.indexOf('www.andrewmcwatters.com') !== -1) {
                return true;
            }

            return false;
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
                opacity: 1
            }, 0.1);
        }

        function registerAnimations() {
            // Don't animate anything else if we came from another part
            // of the site.
            if (wasReferredFromHost()) {
                return;
            }

            // Flicker the grid out when everything finishes loading.
            var $grid = $('#grid');
            $grid.css('display', 'block');
            $(window).one('load', function() {
                TweenMax.to($grid, 2, {
                    opacity: 0,
                    ease: RoughEase.ease.config({
                        strength: 16,
                        points: 80,
                        template: Quint.easeOut,
                        taper: 'out',
                        clamp: true
                    })
                });
            });
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

    // Register animations to fire on load.
    andrewmcwatters.registerAnimations();

    $(function() {
        FastClick.attach(document.body);

        TweenMax.defaultEase      = Quint.easeOut;
        TweenMax.defaultOverwrite = 'all';

        var am = andrewmcwatters;
        am.registerEventListeners();

        if (am.init) {
            am.init();
        } else {
            am.initAnimations();
        }
    });
})(Zepto, window, document);
