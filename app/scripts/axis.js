/*!
 * /public
 * From the desk of Andrew McWatters
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * Copyright 2014.
 */
(function ($, window, document, undefined) {
    'use strict';

    var axis        = window.axis;
    var page        = window.page;
    var queryString = window.queryString;
    var location    = window.location;

    axis = (function () {
        page.base('/axis');
        page('*', function(ctx, next) {
            ctx.query = queryString.parse(location.search);
            next();
        });

        page.base('/account', function(ctx) {
            if (Object.keys(ctx.query).length <= 0) {
                return;
            }

            var verify = ctx.query.verify;
            if (verify) {
                $('section').append('<p>' +
                    'Verifying account...' +
                '</p>');
            }
        });

        function init() {
            page();
        }

        return {
            init: init
        };
    })();

    window.axis = axis;

    $(function() {
        axis.init();
    });
})(Zepto || jQuery, window, document);
