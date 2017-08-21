// Googlemap api
var scrollPos = 0;

const kielitaidot = [1, 0.9, 0.75, 0.75];
const ohjelmointitaidot = [0.85, 0.75, 0.5, 0.7,
                           0.5, 0.6, 0.6, 0.5, 0.3, 0.3];


var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if (((element_bottom_position) >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}


function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(61.478, 23.785),
        zoom: 11,
        scrollwheel: false,
        draggable: true,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'Dark']
        }
    };

    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    var styledMapType = new google.maps.StyledMapType(
            [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
], {
            name: 'Dark'
        });

    var map = new google.maps.Map(document.getElementById("kartta"), mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('Dark', styledMapType);
    map.setMapTypeId('Dark');


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
        items: ['Be sportmaniac. ', 'Smile all day everyday :) ', 'Be curious. ', 'Or be awesome instead... ', 'Love yourself <3 ', 'Cherish friends! ']
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

function setUpBars(bars, values) {
    clearBars(bars);
    bars.forEach((bar, i) => bar.animate(values[i]));
}



$(document).ready(function () {


    initialize();
    setUpBars(circleBars, kielitaidot);
    setUpBars(progressBars, ohjelmointitaidot);
    $('#loading-screen').fadeOut(1500, function () {
        $('#navi').fadeIn();
        $('.intro').slideDown(1500);
    });

    $('.kieli-skill').click(function () {
        clearBars(circleBars);
        setUpBars(circleBars, kielitaidot);
    });

    $('.prog-skill').click(function () {
        clearBars(progressBars);
        setUpBars(progressBars, ohjelmointitaidot);
    });

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

            var scrollTop = $(this).scrollTop();

            if (scrollTop >= scrollPos && scrollTop != 0) {
                
                $('#navi').fadeOut();

            } else {
                $('#navi').fadeIn();
                
            }
            console.log(scrollTop + "  -  " + scrollPos);

            scrollPos = scrollTop;

            // Move intro on scroll

            if (!(scrollPos > $('header').height()) / 3) {
                $('.intro').css({
                    "transform": "translateY(" + scrollPos / 3.2 + "px)"
                });
                $('.intro').animate({
                    opacity: 1 - scrollPos / 400
                }, 10);
            }

        });
    });

    (function ($) {
        "use strict"; // Start of use strict

        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top)
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

