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
    var TweenMax    = window.TweenMax;

    page.base('/grid');
    page('*', function(ctx, next) {
        setTimeout(function() {
            ctx.query = queryString.parse(location.search);
            next();
        }, 0);
    });

    page('/api(?:.html)?', function(ctx) {
        var title = ctx.query.title || 'Home';

        requestAnimationFrame(function() {
            var $article = $('article');
            $article.data('transclude', 'grid/docs/' + title + '.md');
            document.transcludeSelector('article');
        });
    });
    page();

    am.selectors = [
        'header',
        'aside',
        'section',
        'footer'
    ];

    function setArticleAnchors($target) {
        $target.find('a').each(function(index, item) {
            var href = $(item).attr('href');
            if (href.indexOf('/') === -1) {
                $(item).attr('href', 'grid/api?title=' + href);
            }
        });
    }

    function showMarkdown($target) {
        $target.html(marked($target.html()));
        setArticleAnchors($target);

        $target.css('display', '');
        $target.css('opacity', 0);
        TweenMax.staggerTo($target, 0.8, {
            opacity: 1,
            delay: 0.2
        }, 0.1);
    }

    $(function() {
        $('*[data-markdown]').on('transclude', function(e) {
            e.preventDefault();

            requestAnimationFrame(function() {
                showMarkdown($(e.target));
            });
        });

        $(document).on('ajaxError', function(e, xhr, options, error) {
            var $article = $('article');
            $article.html(error);
            showMarkdown($article);
        });
    });
})(Zepto || jQuery, window, document);
