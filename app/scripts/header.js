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
  var location = window.location;
  var TweenMax = window.TweenMax;

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

      if (!site.referredByOrigin()) {
        extendHr();
        fadeInDownNavLinks();
        rotateInDownNavTitle();
      }
    }

    /**
     * Check if this route matches `href`, if so
     * populate `#nav-title`.
     */

    function findActive(ctx) {
      return function() {
        var pathname = ctx.pathname;
        var href     = $(this).attr('href');
        if (location.hostname === 'localhost' && pathname !== '/') {
          href += '.html';
        }

        if (href === pathname) {
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

      setTitle($(link).data('title'));
    }

    /**
     * Set nav title.
     */

    function setTitle(title) {
      $('#nav-title').text(title);
    }

    /**
     * Extend horizontal rule.
     */

    function extendHr() {
      TweenMax.fromTo('header hr', 1, {width: '0%'}, {width: '100%'});
    }

    /**
     * Fade in down nav links.
     */

    function fadeInDownNavLinks() {
      var $links   = $('header li a');
      var position = $links.position();
      var top      = -position.top + -$links.height() - 2;
      TweenMax.staggerFromTo($links, 0.2, {top: top}, {top: 0}, 0.04);
    }

    /**
     * Rotate in down nav title.
     */

    function rotateInDownNavTitle() {
      var $title = $('header h2');
      $title.css('transform-origin', '50% 50% ' + $title.height() / 2 + 'px');
      TweenMax
        .fromTo($title, 0.4, {rotationX: -90}, {rotationX: 0})
        .delay(0.4);
    }
  });
})(Zepto || jQuery, window, document);
