/*!
 * /public
 * From the desk of Andrew McWatters
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * Copyright 2014.
 */
(function ($, window, document, undefined) {
    'use strict';

    var page            = window.page;
    var TweenMax        = window.TweenMax;
    var RoughEase       = window.RoughEase;
    var Quint           = window.Quint;
    var andrewmcwatters = window.andrewmcwatters;
    var FastClick       = window.FastClick;

    andrewmcwatters = (function () {
        function fadeInFooter() {
            if (!page.wasReferredToByHost()) {
                return;
            }

            var $footer = $('footer');
            $footer.css('opacity', 0);
            TweenMax.to($footer, 0.2, {
                opacity: 1,
                onComplete: function() {
                    $footer.css('opacity', '');
                }
            });
        }

        function showGridPoints() {
            var $grid = $('#grid');
            $grid.addClass('points');
            $grid.css('display', 'block');
        }

        function fadeInGridPoints() {
            var $grid = $('#grid');
            $grid.addClass('points');
            TweenMax.to($grid, 2, {
                opacity: 1,
                ease: Quint.easeOut
            });
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

        function registerAnimations() {
            $('footer').on('transclude', fadeInFooter);

            if (page.wasReferredToByHost()) {
                showGridPoints();
                return;
            }

            flickerOutGrid();
        }

        function initAnimations() {
            // Fade in the core elements, one after another, quickly.
            var selectors = [
                'header',
                'section',
                'footer'
            ];

            if (page.wasReferredToByHost()) {
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

        return {
            registerAnimations:  registerAnimations,
            initAnimations:      initAnimations
        };
    })();

    window.andrewmcwatters = andrewmcwatters;

    $(function() {
        FastClick.attach(document.body);

        TweenMax.defaultEase      = Quint.easeOut;
        TweenMax.defaultOverwrite = 'all';

        var am = andrewmcwatters;
        if (am.load) {
            am.load();
        } else {
            // Register animations to fire on load.
            am.registerAnimations();
            am.initAnimations();
        }
    });
})(Zepto || jQuery, window, document);
