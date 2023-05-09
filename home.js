
function initMap() {
  // Create a new map centered on the campsite location
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.3482, lng: -71.0445 },
    zoom: 8,
  });
  
  // Add markers for each pitch location
  const lakefrontMarker = new google.maps.Marker({
    position: { lat: 42.3571, lng: -71.0523 },
    map: map,
    title: "Lakefront pitch"
  });
  