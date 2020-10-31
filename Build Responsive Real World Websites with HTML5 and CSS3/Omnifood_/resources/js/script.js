$(document).ready(function() {
    $('.section-features--js').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky-nav');
        } else {
            $("nav").removeClass('sticky-nav');
        }
    }, {
        offset: '30%',
    });

    $('.btn-to-plan--js').click(function() {
        $('html, body').animate({scrollTop: $('.section-plans--js').offset().top}, 1000);
    });

    $('.btn-to-features--js').click(function() {
        $('html, body').animate({scrollTop: $('.section-features--js').offset().top}, 700);
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
            }
        }
    });

    $('#feature-animate').waypoint(function(direction) {
        $('#feature-animate').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('#image-animate').waypoint(function(direction) {
        $('#image-animate').addClass('animate__animated animate__fadeInUpBig');
    }, {
        offset: '50%'
    });

    $('#city-animate').waypoint(function(direction) {
        $('#city-animate').addClass('animate__animated animate__zoomIn');
    }, {
        offset: '50%'
    });

    $('#plan-animate').waypoint(function(direction) {
        $('#plan-animate').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });
});