/*!
 * /public
 * From the desk of Andrew McWatters
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * @version 0.0.0
 * Copyright 2014. MIT licensed.
 */
;(function ($, window, document, undefined) {
  'use strict';

  var TweenMax    = window.TweenMax;
  var Quint       = window.Quint;
  var async       = window.async;
  var page        = window.page;
  var queryString = window.queryString;
  var location    = window.location;
  var RoughEase   = window.RoughEase;

  $(function() {
    /**
     * Instantiate FastClick.
     */
    FastClick.attach(document.body);

    /**
     * Default ease.
     */

    TweenMax.defaultEase = Quint.easeOut;

    /**
     * Hide main.
     */

    $('main').css('opacity', 0);

    /**
     * Empty async event callback.
     */

    var done = function(cb) { return function(e) { 
      $(e.target).css('opacity', 0);
      cb(null);
    }; };

    /**
     * Handle "transclude" events.
     */

    function ontransclude() {
      var targets = ['header', 'main', 'footer'];
      TweenMax.staggerFromTo(targets, 0.2, {opacity: 0}, {opacity: 1}, 0.02);
    }

    /**
     * Wait for partials to transclude.
     */

    async.parallel([
      function(cb) { $('header').on('transclude', done(cb)); },
      function(cb) { $('footer').on('transclude', done(cb)); }
    ], ontransclude);

    /**
     * Handle "load" event.
     */

    $(window).one('load', function() {
      flickerOutGrid();
    });

    /**
     * Configure flicker.
     */

    var flicker = RoughEase.ease.config({
      strength: 16,
      points: 80,
      template: Quint.easeOut,
      taper: 'out',
      clamp: true
    });

    /**
     * Flicker out grid.
     */

    function flickerOutGrid() {
      TweenMax.to('#grid', 2, {
        opacity: 0,
        ease: flicker,
        onComplete: fadeInGridPoints
      });
    }

    /**
     * Fade in grid points.
     */

    function fadeInGridPoints() {
      $('#grid').addClass('points');
      TweenMax.to('#grid', 2, {opacity: 1});
    }

    /**
     * Set query object.
     */

    page(function(ctx, next) {
      ctx.query = queryString.parse(location.search);
      next();
    });

    page();
  });
})(Zepto || jQuery, window, document);
