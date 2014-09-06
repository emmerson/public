/*!
 * hypertransclude.js
 * Redefining the "HT" in "HTML" for the modern web
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * @version 1.1.1
 * Copyright 2014. MIT licensed.
 */
(function ($, window, document, undefined) {
    'use strict';

    function transclude(index, item) {
        var $item = $(item);

        // Hide the element, allowing developers to transition the transcluded
        // partial into view
        $item.css('display', 'none');
        $item.load($item.data('transclude'), function() {
            // Create a transclude event
            var event = $.Event('transclude', {
                bubbles: false
            });

            // Dispatch the event
            $item.trigger(event);

            // If we didn't bail out, let 'er rip.
            if (!event.isDefaultPrevented()) {
                // It's time to d-d-d-d-duel!
                $item.css('display', '');
            }
        });
    }

    document.transcludeSelector = function(selector) {
        transclude(0, $(selector + '[data-transclude]')[0]);
    };

    document.transcludeSelectorAll = function(selector) {
        $(selector + '[data-transclude]').each(transclude);
    };

    $(function() {
        document.transcludeSelectorAll('*');
    });
})(Zepto || jQuery, window, document);
