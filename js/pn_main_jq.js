$(document).ready(function(){

    "use strict";

    //preloader
    $( window ).on( 'load', function() {
        $('#pl').addClass('load-finish');

        setTimeout(function() {
            $('.bg').removeClass('bg-start');
            $('#title').removeClass('title-start');
        }, 500);
    });

    //background parallax
    $( window ).on('scroll', () =>{
        $('.js-move').each(function(){
            let pos = $(window).scrollTop() * $(this).data('rate');
            $(this).css('transform','translateY('+pos+'px)');
        });
    });

    //Menu toggle
    $('#pn-header-menu').on('click', () =>{
        $('.pn-menu').toggleClass('menu-hide');
    });
    //Hide menu on click outside
    $(document).on('click',function (e) {
        var el = '.pn-menu, #pn-header-menu';
        if ($(e.target).closest(el).length) return;
           $('.pn-menu').addClass('menu-hide');
    });

    //Gallery page
    //Small picture size
    $('.s').on('click', ()=>{
        $(".picture").each(function(){
            $(this).addClass('picture-sd');
            setTimeout (function() {
              $(this).removeClass('picture-sd picture-l picture-m');
            }.bind(this), 500);
        });
    });

    //Medium picture size
    $('.m').on('click', ()=>{
        $(".picture").each(function(){
            $(this).addClass('picture-sd');
            setTimeout (function() {
              $(this).removeClass('picture-sd picture-l').addClass('picture-m');
            }.bind(this), 500);
        });
    });

    //Large picture size
    $('.l').on('click', ()=>{
        $(".picture").each(function(){
            $(this).addClass('picture-sd');
            setTimeout (function() {
              $(this).removeClass('picture-sd picture-m').addClass('picture-l');
            }.bind(this), 500);
        });
    });

    //Contact page
    //Background map parallax
//    $( window ).on('scroll', () =>{
//        let pos = $(window).scrollTop() * 0.2;
//        $('#more').css('transform','translateY('+pos+'px)');
//    });

    //Map show
    $('#info-toggle').on('click', ()=>{
        $('#more').addClass('m-hide');
        $('#info-toggle').addClass('disabled');
        setTimeout (function() {
            $('#closer').removeClass('closer-start');
            $('#more').addClass('more-top');
            setTimeout (function() {
                $('#more').removeClass('m-hide');
            }, 200);
        }, 200);
    });

    //Map hide
    $('#closer').on('click', ()=>{
        $('#more').addClass('m-hide');
        $('#info-toggle').removeClass('disabled');
        setTimeout (function() {
            $('#closer').addClass('closer-start');
            $('#more').removeClass('more-top');
            setTimeout (function() {
                $('#more').removeClass('m-hide');
            }, 200);
        }, 200);
    });

});























