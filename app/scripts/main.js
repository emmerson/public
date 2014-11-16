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

  $(function() {
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
     * Set query object.
     */
    page(function(ctx, next) {
      ctx.query = queryString.parse(location.search);
      next();
    });

    page();
  });
})(Zepto || jQuery, window, document);
