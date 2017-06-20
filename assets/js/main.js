// Googlemap api
var scrollPos = 0;



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



var suomiBar = new ProgressBar.Circle(suomi, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#ffff66',
        width: 2
    },
    to: {
        color: '#33cc33',
        width: 5
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});

var ruotsiBar = new ProgressBar.Circle(ruotsi, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#ffff66',
        width: 2
    },
    to: {
        color: '#33cc33',
        width: 5
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});

var englantiBar = new ProgressBar.Circle(englanti, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#ffff66',
        width: 2
    },
    to: {
        color: '#33cc33',
        width: 5
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});
var saksaBar = new ProgressBar.Circle(saksa, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 5,
    trailWidth: 2,
    easing: 'bounce',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: {
        color: '#ffff66',
        width: 2
    },
    to: {
        color: '#33cc33',
        width: 5
    },
    // Set default step function for all animate calls
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value);
        }

    }
});

function clearCirceBars(){
    suomiBar.set(0);
    englantiBar.set(0);
    saksaBar.set(0);
    ruotsiBar.set(0);
}

function setUpCircleBars(a,b,c,d){
    clearCirceBars();
    suomiBar.animate(a);
    englantiBar.animate(b);
    ruotsiBar.animate(c);
    saksaBar.animate(d);
}


$(document).ready(function () {

    initialize();
    setUpCircleBars(1,0.9,0.7,0.7);


    $('#loading-screen').fadeOut(4000, function () {
        $('#navi').show();
    });

    $('.kieli-skill').click(function () {
                      clearCirceBars();
        setUpCircleBars(1,0.9,0.7,0.7);
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
