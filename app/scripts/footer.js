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

  var page     = window.page;
  var site     = window.site;
  var TweenMax = window.TweenMax;

  $(function() {
    /**
     * Footer middleware.
     */

    page(function(ctx, next) {
      $('footer').on('transclude', $.proxy(ontransclude, ctx));
      next();
    });

    /**
     * Handle "transclude" events.
     */

    function ontransclude(e) {
      var el = e.target;
      if (!el) {
        return;
      }

      if (!site.referredByOrigin()) {
        fadeInDownFooter();
      }
    }

    /**
     * Fade in down footer.
     */

    function fadeInDownFooter() {
      var $footer = $('footer');
      var top     = -9;
      TweenMax
        .fromTo($footer, 0.6, {top: top}, {top: 0})
        .delay(0.4);
    }
  });
})(Zepto || jQuery, window, document);
