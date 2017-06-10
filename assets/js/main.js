// Googlemap api

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(61.476, 23.810942),
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
        content: contentString,
        pixelOffset: new google.maps.Size(0, -15)
    });

    marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: {
            lat: 61.457693,
            lng: 23.850942
        }
    });

    marker.addListener('click', function () {
        infowindow.open(map, marker);
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
    items: ['Be sportmaniac','Smile all day everyday','Be curious','Or be awesome instead','Love yourself','Cherish friends']
  },
  methods: {
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  }
})



$(document).ready(function () {
    initialize();
});
