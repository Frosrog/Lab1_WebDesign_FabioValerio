var map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('googleMap'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 17
  });
  

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
};




function addComment() {
    var now = new Date();
    comment = document.getElementById('comment').value;
    document.getElementById("lol").innerHTML +=
    comment +" tweet publicado el día " + (now.getDate() + "/" + (now.getMonth() +1) + "/" + now.getFullYear())+" a las "
    + now.getHours()+ ":"+ now.getMinutes()+"<br/>";
    document.getElementById('comment').value ="";
    
    
};

var boton = document.getElementById("addComment");
boton.addEventListener('click', function() {
    addComment();
});

var botonFondo = document.getElementById("cambiarFondobtn");

