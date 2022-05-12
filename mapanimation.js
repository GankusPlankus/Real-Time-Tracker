// This array contains the coordinates for all bus stops between Beaverton and Washington Square
const busStops = [
  [-122.825712, 45.438373],
  [-122.820903, 45.439826],
  [-122.815686, 45.441433],
  [-122.810405, 45.442830],
  [-122.805467, 45.443613],
  [-122.799842, 45.444238],
  [-122.795993, 45.445126],
  [-122.793201, 45.445822],
  [-122.788821, 45.447588],
  [-122.782966, 45.455585],
  [-122.782105, 45.456601],
  [-122.778765, 45.452597],
];

// Access token
mapboxgl.accessToken = 'pk.eyJ1IjoiY3JhbnNtZWllciIsImEiOiJjbDMxNWl5cTUwNXp5M2tqdTNtMjVyeGFoIn0.6ICzhDTedYHSteXib4cw5w';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-122.796704, 45.4450142],
  zoom: 13,
});


var marker = new mapboxgl.Marker()
.setLngLat([-122.825712, 45.438373])
.addTo(map);
// counter here represents the index of the current bus stop
let counter = 0;
function move() {

  setTimeout(() =>{
    if (counter >= busStops.length) counter = 0;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();

  }, 500);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
