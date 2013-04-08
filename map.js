function initialize() {

  // TODO: prepare location list
  var paris = new google.maps.LatLng(48.856614,2.352222);
  var hangzhou = new google.maps.LatLng(30.274089,120.155069);
  var taizhou =  new google.maps.LatLng(32.455778,119.923116);
  var shanghai = new google.maps.LatLng(31.230393,121.473704);
  var madrid = new google.maps.LatLng(40.416775,-3.70379);
  var milan = new google.maps.LatLng(45.465454,9.186516);
  var delft = new google.maps.LatLng(52.009507,4.360515);

  var mapOptions = {
    center: new google.maps.LatLng(30.274089,120.155069),
    zoom: 2,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  // TODO: Marker generator
  var parisMarker = new google.maps.Marker({
    position: paris,
    title: "Paris",
    animation: google.maps.Animation.DROP,
    map: map
  });

  // marker.setMap(map);
}

function loadCities() {}

function generateMarkers() {}
