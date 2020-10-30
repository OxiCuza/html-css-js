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
});