(function ($) {
    //Sticky Header
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('body').addClass('appear-nav');
            }
            else {
                $('body').removeClass('appear-nav')
            }
        })
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