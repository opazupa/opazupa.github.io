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
        autoStyleContainer: true,
        style:{
            color: 'orange',
            position: 'absolute',
            top: '55%',
            left: '45%',
        },
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
    duration: 1900,
    text: {
        autoStyleContainer: true,
        style:{
            color: 'orange',
            position: 'absolute',
            top: '55%',
            left: '45%',
        },
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
    duration: 2500,
    text: {
        autoStyleContainer: true,
        style:{
            color: 'orange',
            position: 'absolute',
            top: '55%',
            left: '45%',
        },
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
    duration: 1800,
    text: {
        autoStyleContainer: true,
        style:{
            color: 'orange',
            position: 'absolute',
            top: '55%',
            left: '45%',
        },

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

var cplusBar = new ProgressBar.Line(cplus, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
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
    cplusBar.animate(1.0);  // Number from 0.0 to 1.0

    $('#loading-screen').fadeOut(2500, function () {
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
