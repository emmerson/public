/*!
 * /public
 * From the desk of Andrew McWatters
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * Copyright 2014.
 */
(function ($, window, document, undefined) {
    'use strict';

    var page        = window.app;
    var queryString = window.queryString;
    var location    = window.location;
    var marked      = window.marked;
    var am          = window.andrewmcwatters;
    // var TweenMax    = window.TweenMax;

    page.base('/grid');
    page('*', function(ctx, next) {
        ctx.query = queryString.parse(location.search);
        next();
    });

    function addMarkdownListener() {
        $('*[data-markdown]').on('transclude', function(e) {
            var $target = $(e.target);
            requestAnimationFrame(function() {
                marked($target.html(), function(err, content) {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    requestAnimationFrame(function() {
                        $target.html(content);
                    });
                });
            });
        });
    }

    function setArticle(title) {
        var article  = 'article';
        var $article = $(article);
        $article.data('transclude', 'grid/docs/' + title + '.md');
        document.transcludeSelector(article);
    }

    page('/api(?:.html)?', function(ctx) {
        var title = ctx.query.title || 'Home';

        requestAnimationFrame(function() {
            setArticle(title);
        });
    });
    page();

    am.selectors = [
        'header',
        'aside',
        'section',
        'footer'
    ];

    $(function() {
        addMarkdownListener();
    });
})(Zepto || jQuery, window, document);
