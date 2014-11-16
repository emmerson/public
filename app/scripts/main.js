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

  /**
   * Module dependencies.
   */

  var FastClick   = window.FastClick;
  var TweenMax    = window.TweenMax;
  var Quint       = window.Quint;
  var async       = window.async;
  var page        = window.page;
  var queryString = window.queryString;
  var location    = window.location;
  var site        = window.site;
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
     * Async hide callback.
     */

    var hide = function(cb) { return function(e) { 
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
      function(cb) { $('header').on('transclude', hide(cb)); },
      function(cb) { $('footer').on('transclude', hide(cb)); }
    ], ontransclude);

    /**
     * Handle "transcludeload" event.
     */

    $(window).one('transcludeload', function() {
      if (location.hostname === 'localhost') {
        rewriteHrefs();
      }

      if (site.referredByOrigin()) {
        showGridPoints();
        return;
      }

      flickerOutGrid();
    });

    /**
     * Retrieve the file extension from `href`.
     */

    function extension(href) {
      var a = href.split('.');
      if (a.length === 1 || (a[0] === '' && a.length === 2)) {
        return '';
      }
      return a.pop();
    }

    /**
     * Rewrite hrefs on localhost.
     */

    function rewriteHrefs() {
      $('a').each(function() {
        if (this.hostname === 'localhost' && this.pathname !== '/') {
          var ext = extension(this.href);
          if (ext === '') {
            this.href += '.html';
          }
        }
      });
    }

    /**
     * Show grid points.
     */

    function showGridPoints() {
      $('#grid').addClass('points');
    }

    /**
     * Configure flicker ease out.
     */

    var flickerEaseOut = RoughEase.ease.config({
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
        ease: flickerEaseOut,
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
