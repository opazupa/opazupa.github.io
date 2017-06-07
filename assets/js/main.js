// Googlemap api

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(59.327, 18.067),
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

    var contentString = '<div>' + '<span>Tutkijankatu 3 A 40 ' + '<br>' +
        '33720 Tampere </span>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: {
            lat: 59.327,
            lng: 18.067
        }
    });
    marker.addListener('click', toggleBounce
        );
    marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
        } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);

    }
}

$(document).ready(function () {
    initialize();
});
