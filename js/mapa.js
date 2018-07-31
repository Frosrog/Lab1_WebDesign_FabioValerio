var map, infoWindow , myLatLng;
var cont = 0;
var body = document.getElementsByTagName(body);

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
      myLatLng = pos;
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
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Tweet Publicado el día "+ now.toLocaleString()
      });
      marker.setMap(map);
    
    comment = document.getElementById('comment').value;
    document.getElementById("lol").innerHTML +=  comment + "</br>" + marker.title+"</br>";
    document.getElementById('comment').value ="";
    
    
};

var boton = document.getElementById("addComment");
boton.addEventListener('click', function() {
    addComment();
});

var botonFondo = document.getElementById("cambiarFondobtn");

function changeBackground() {
    if (cont== 0){
        document.body.style.backgroundImage = "url('img/152351438-main.jpg')";
        
        cont = 1;
    }else if(cont == 1){
        
        document.body.style.backgroundImage = "url('img/nier-automata-4k-qu.jpg')";
        
        cont = 2;
    }
    else if(cont == 2){
        
        document.body.style.backgroundImage = "url('img/world-of-warcraft-wallpaper-design-art-walls.jpg')";
        
        cont = 0;
    }
    
    
};
botonFondo.addEventListener('click', function() {
    changeBackground();
});

var markerOld = document.getElementById("lol");
markerOld.addEventListener('click', function() {
    console.log(markerOld.id);

    map.setCenter(markerOld.id);
});

