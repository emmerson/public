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

  var page = window.page;

  $(function() {
    /**
     * Header middleware.
     */

    page(function(ctx, next) {
      $('header').on('transclude', $.proxy(ontransclude, ctx));
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

      // jshint validthis: true
      $(el).find('nav a').each(findActive(this));
    }

    /**
     * Check if this route matches `href`, if so
     * populate `#nav-title`.
     */

    function findActive(ctx) {
      return function() {
        if ($(this).attr('href') === ctx.pathname) {
          setActive(this);
          return false;
        }
      };
    }

    /**
     * Set active nav link.
     */

    function setActive(link) {
      var el = $(link).parent();
      el.addClass('active');

      setTitle($(link).attr('title'));
    }

    /**
     * Set nav title.
     */

    function setTitle(title) {
      $('#nav-title').text(title);
    }
  });
})(Zepto || jQuery, window, document);
