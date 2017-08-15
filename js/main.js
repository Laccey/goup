(function ($) {
    'use strict';
    //Preloader
    $(window).load(function () {
        $('.preloader').delay(1000).fadeOut('slow');
    });
    //Sticky Header
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('body').addClass('appear-nav');
            }
            else {
                $('body').removeClass('appear-nav')
            }
        });
        $(window).scroll();
        // ScrollSpy
        $("body").scrollspy({
            target  : '.navbar',
            offset  : 65
        });

        //Scroll Top
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 60
                    }, 500);
                    return false;
                }
            }
        });

        //Slide Background
        $('.intro').vegas({
            slides:[
                {src: "images/banner/slide_img01.jpg"},
                {src:"images/banner/slide_img02.jpg"}
            ]
        });
        //Scroll Animation
        var wow = new WOW(
            {
                mobile:false
            }
        );
        wow.init();
    });

    //Feedback Carousel
    $('.feedback-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        autoplayTimeout:9000,
        items:1,
        nav:true,
        navText:['<i class="glyphicon glyphicon-menu-left"></i>','<i class="glyphicon glyphicon-menu-right"></i>']
    });


})(window.jQuery);