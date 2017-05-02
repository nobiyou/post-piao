/*------------------------------
 * Copyright 2014 Pixelized
 * http://www.pixelized.cz
 *
 * Freelancer theme v1.1
------------------------------*/

$(window).scroll(function () {

    if ($(window).scrollTop() > 300) {
        $('.navbar-default').fadeIn(300);
    } else {
        $('.navbar-default').fadeOut(300);
    }

    if ($(window).width() > 767) {
        if ($(this).scrollTop() > 600) {
            $('.scroll-up').fadeIn(300);
        } else {
            $('.scroll-up').fadeOut(300);
        }
    }
});

$(document).ready(function () {

    if ($(window).width() > 767) {
        $('.scrollpoint.sp-effect1').waypoint(function () {
            $(this).toggleClass('');
            $(this).toggleClass('animated fadeInLeft');
        }, {
            offset: '90%'
        });
        $('.scrollpoint.sp-effect2').waypoint(function () {
            $(this).toggleClass('');
            $(this).toggleClass('animated fadeInRight');
        }, {
            offset: '90%'
        });
        $('.scrollpoint.sp-effect3').waypoint(function () {
            $(this).toggleClass('');
            $(this).toggleClass('animated fadeInDown');
        }, {
            offset: '90%'
        });
        $('.scrollpoint.sp-effect4').waypoint(function () {
            $(this).toggleClass('');
            $(this).toggleClass('animated fadeIn');
        }, {
            offset: '70%'
        });

        $('.macbook-inner').waypoint(function () {
            $(this).toggleClass('');
            $(this).toggleClass('black');
        }, {
            offset: '70%'
        });
    }
});




$( window ).load( function()
{
    $( '.blog-masonry' ).masonry( { itemSelector: '.post-masonry' } );
});