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
  var site        = window.site;
  var page        = window.page;
  var location    = window.location;
  var queryString = window.queryString;

  $(function() {
    /**
     * Instantiate FastClick.
     */

    FastClick.attach(document.body);

    /**
     * Handle "transcludeload" event.
     */

    $(window).one('transcludeload', function() {
      if (!site.privatelyHosted()) {
        return;
      }

      rewriteHrefs();
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
     * Rewrite hrefs when privately hosted.
     */

    function rewriteHrefs() {
      $('a').each(function() {
        if (this.pathname !== '/') {
          var ext = extension(this.href);
          if (ext === '') {
            this.href += '.html';
          }
        }
      });
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
