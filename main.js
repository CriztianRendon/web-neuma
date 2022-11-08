// Initialize and add the map
function initMap() {
    // The location of Uluru
    const position = { lat: -27.371508617404807, lng: -55.889826994786006 };
    // The map, centered at 25 de Mayo 2241, Posadas, Misiones, Argentina
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: position,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: position,
      map: map,
    });
  }
  
  window.initMap = initMap;