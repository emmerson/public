/*!
 * page.js
 * A convenience library for design-heavy websites
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * @version 0.0.1
 * Copyright 2014. MIT licensed.
 */
(function ($, window, document, undefined) {
    'use strict';

    var page = {
        wasReferredToByHost: function() {
            if (document.referrer === '') {
                return false;
            }

            var referrer  = document.createElement('a');
            referrer.href = document.referrer;
            var location  = document.location;
            return location.hostname === referrer.hostname;
        }
    };

    window.page = page;
})(Zepto || jQuery, window, document);
