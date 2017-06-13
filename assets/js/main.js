// Googlemap api
var scrollPos =0;

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(61.456, 23.850942),
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
    items: ['Be sportmaniac.','Smile all day everyday :)','Be curious.','Or be awesome instead...','Love yourself <3','Cherish friends!']
  },
  methods: {
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
})



$(document).ready(function () {

    initialize();

    $('#loading-screen').fadeOut(4000, function(){
        $('#navi').show();
    });



    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

            var scrollTop = $(this).scrollTop();
                 // set distance user needs to scroll before we start fadeIn
            if (scrollTop >= scrollPos) {
                $('#navi').fadeOut();
            } else {
                $('#navi').fadeIn();
            }
            scrollPos = scrollTop;
        });
    });
});


