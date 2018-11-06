

var window_width = $(window).width() - $('.jellybeans').width();

var full_scrollable_height = $(document).height() - $(window).height();

var jellyBeanStartPercentage = 10;
var jellyBeanEndPercentage = 70;

$(function () {
    $(window).scroll(function () {
        console.log(scroll);

        var windowHeight = $(window).height();
        var startValue = 1595 - windowHeight;
        var endValue = 1595 + $('.jellybeans').height();

        var scroll_position = $(window).scrollTop();

        var ratio = (scroll_position - startValue) / (endValue - startValue);
        var finalPercentage = 60 * ratio + 10;

        finalPercentage = Math.max(finalPercentage, 10);
        finalPercentage = Math.min(finalPercentage, 70);

        // console.log(scroll_position);
        // var object_position_left = window_width * (scroll_position / full_scrollable_height) * 2.5;
        $('.jellybeans').css({
            'left': finalPercentage + "%"
        });

        var finalRightPercentage = 100 - finalPercentage;

        $('.candycorns').css({
            'left':finalRightPercentage + "%"
        });
    });
});

$(function () {
    $(window).scroll(function () {

        var windowHeight = $(window).height();
        var startValue = 2700 - windowHeight;
        var endValue = 2700 + $('.candycorns').height();

        var scroll_position = $(window).scrollTop();

        var ratio = (scroll_position - startValue) / (endValue - startValue);
        var finalPercentage = 60 * ratio + 10;

        finalPercentage = Math.max(finalPercentage, 10);
        finalPercentage = Math.min(finalPercentage, 70);

        // console.log(scroll_position);
        // var object_position_left = window_width * (scroll_position / full_scrollable_height) * 2.5;

        var finalRightPercentage = 100 - finalPercentage;

        $('.candycorns').css({
            'left':finalRightPercentage + "%"
        });
    });
});


var $blob02 = $('#blob02');
var $win = $(window);

$win.on('scroll', function () {
    var top = $win.scrollTop() / 3;
    $blob02.css('transform','rotate(' + top + 'deg)');

});










