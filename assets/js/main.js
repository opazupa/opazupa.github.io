$.getScript('../assets/js/bars.js');

// Googlemap api
var scrollPos = 0;
const kielitaidot = [1,0.9,0.75,0.75];
const ohjelmointitaidot = [0.85,0.75, 0.5, 0.7,
                           0.5, 0.6,0.6,0.5,0.3,0.3];


function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(61.478, 23.785),
        zoom: 12,
        scrollwheel: false,
        draggable: true,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
    };
    var map = new google.maps.Map(document.getElementById("kartta"), mapOptions);


    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: {
            lat: 61.457693,
            lng: 23.850942
        }
    });

    marker.addListener('click', function () {
        toggleBounce();
    });
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);

    }
}

new Vue({
    el: '#luonne-lista',
    data: {
        items: ['Be sportmaniac.', 'Smile all day everyday :)', 'Be curious.', 'Or be awesome instead...', 'Love yourself <3', 'Cherish friends!']
    },
    methods: {
        shuffle: function () {
            this.items = _.shuffle(this.items)
        }
    }
})


function clearBars(bars) {
    bars.forEach(bar => bar.set(0));
}

function setUpBars(bars,values) {
    clearBars(bars);
    bars.forEach((bar, i) => bar.animate(values[i]) );
}



$(document).ready(function () {


    initialize();
    setUpBars(circleBars,kielitaidot);
    setUpBars(progressBars,ohjelmointitaidot);
    $('#loading-screen').fadeOut(2500, function () {
        $('#navi').show();
    });

    $('.kieli-skill').click(function () {
        clearBars(circleBars);
        setUpBars(circleBars,kielitaidot);
    });

    $('.prog-skill').click(function () {
        clearBars(progressBars);
        setUpBars(progressBars,ohjelmointitaidot);
    });
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

            var scrollTop = $(this).scrollTop();

            if (scrollTop >= scrollPos) {
                $('#navi').fadeOut();
            } else {
                $('#navi').fadeIn();
            }
            scrollPos = scrollTop;
        });
    });

    (function ($) {
        "use strict"; // Start of use strict

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });

        // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        });

        // Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function () {
            $('.navbar-toggle:visible').click();
        });

        // Offset for Main Navigation
        $('#navi').affix({
            offset: {
                top: 100
            }
        });

    })(jQuery);
});
