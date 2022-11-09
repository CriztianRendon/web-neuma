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


  // NAVBAR SCROLLING

  document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    // add padding-top to body (if necessary)
    navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
  
    if(el_autohide){
      let last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      }); 
      // window.addEventListener
    }
    // if
  
  }); 
  // DOMContentLoaded  end