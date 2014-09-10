/*!
 * /public
 * From the desk of Andrew McWatters
 * http://www.andrewmcwatters.com/
 * @author Andrew McWatters
 * Copyright 2014.
 */
(function ($, window, document, undefined) {
    'use strict';

    var URL_WEBAPI_BASE = 'https://api.andrewmcwatters.com/axis';

    var page        = window.app;
    var queryString = window.queryString;
    var location    = window.location;
    var TweenMax    = window.TweenMax;

    page.base('/axis');
    page('*', function(ctx, next) {
        ctx.query = queryString.parse(location.search);
        next();
    });

    var hexCharacters = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'
    ];

    // Andrew; math.remap from Grid engine.
    Math.remap = function( n, inMin, inMax, outMin, outMax ) {
        return ( n / ( inMax - inMin ) ) * ( outMax - outMin ) + outMin;
    };

    function characterAtProgress(progress) {
        progress = Math.remap(progress, 0, 1, 0, 15);
        progress = Math.floor(progress);
        return hexCharacters[progress];
    }

    function updateVerificationCode(TweenMax) {
        var $character = $(TweenMax.target);
        if ($character.text() === '' + $character.data('character')) {
            return;
        }

        var character = characterAtProgress(TweenMax.progress());
        if (hexCharacters.indexOf(character) >
            hexCharacters.indexOf($character.data('character'))) {
            $character.text($character.data('character'));
        } else {
            $character.text(character);
        }
    }

    function animateVerificationCode() {
        var $verificationCode = $('#verification-code');
        var $hex = $verificationCode.blast({ delimiter: 'character' });
        $hex.css('opacity', 0);
        TweenMax.staggerTo($hex, 0.6, {
            opacity: 1,
            onStart: function(self) {
                var $character = $(self.target);
                $character.data('character', $character.text());
                $character.text(0);
            },
            onStartParams: ['{self}'],
            onUpdate: updateVerificationCode,
            onUpdateParams: ['{self}'],
            onComplete: updateVerificationCode,
            onCompleteParams: ['{self}']
        }, 0.0125);
    }

    function showVerificationMessage(message) {
        $('#verify-message').text(message);
        $('#verify-info').addClass('show-message');
    }

    function verify(verificationCode) {
        requestAnimationFrame(function() {
            var isVerificationCodeValid = /^[0-9a-f]{40}$/i.test(verificationCode);
            if (!isVerificationCodeValid) {
                $('#verify-invalid').css('display', 'block');
                return;
            }

            var $verificationCode = $('#verification-code');
            $verificationCode.text(verificationCode);
            var $verify = $('#verify');
            $verify.css('display', 'block');

            animateVerificationCode();

            $.ajax({
                type: 'POST',
                url: URL_WEBAPI_BASE + '/verify',
                data: $.param({
                    verification_code: verificationCode
                }),
                dataType: 'json',
                success: function(data) {
                    $('#verify-status').text('OK');

                    setTimeout(function() {
                        showVerificationMessage('Welcome to Axis, ' + data.username + '.');
                    }, 1000 * 1.6);
                },
                error: function(xhr, type) {
                    $('#verify-status').text(type);

                    setTimeout(function() {
                        showVerificationMessage('Please contact an Axis intercessor.');
                    }, 1000 * 1.6);
                }
            });
        });
    }

    page('/account(?:.html)?', function(ctx) {
        if (Object.keys(ctx.query).length === 0) {
            return;
        }

        var verificationCode = ctx.query.verify;
        if (verificationCode) {
            verify(verificationCode);
        }
    });
    page();
})(Zepto || jQuery, window, document);
