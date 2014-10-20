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
        ctx.query = queryString.parse(location.search);
        next();
    });

    function addHomeListener() {
        $('nav li:nth-child(2)').on('click', function(e) {
            e.preventDefault();
            setArticle('Home');
        });
    }

    function fadeInArticle() {
        var $article = $('article');
        $article.css('display', '');
        $article.css('opacity', 0);
        TweenMax.staggerTo($article, 0.8, {
            opacity: 1,
            delay: 0.2
        }, 0.1);
    }

    function addMarkdownAnchorListener(target) {
        $(target).find('a').on('click', function(e) {
            var $target = $(e.target);
            var anchor  = $target.parent()[0];
            var article = queryString.parse(anchor.search).title;

            if (article) {
                e.preventDefault();
                setArticle(article);
            }
        });
    }

    function addMarkdownListener() {
        $('*[data-markdown]').on('transclude', function(e) {
            e.preventDefault();

            var $target = $(e.target);
            requestAnimationFrame(function() {
                marked($target.html(), function(err, content) {
                    if (err) {
                        console.error(err);
                        return;
                    }

                    $target.html(content);
                    addMarkdownAnchorListener($target);
                    fadeInArticle();
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
        addHomeListener();
        addMarkdownListener();
    });
})(Zepto || jQuery, window, document);
