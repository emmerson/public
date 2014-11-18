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
  var page        = window.page;
  var location    = window.location;
  var queryString = window.queryString;

  $(function() {
    /**
     * Instantiate FastClick.
     */

    FastClick.attach(document.body);

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
