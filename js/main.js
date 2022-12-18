
   

  const swiper = new Swiper('.swiper', {
  
    loop: true, 
    slidesPerView: 2,
    spaceBetween: 20,
  
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  
  }); 
   
   
  let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.23158501984542, lng:  -8.628379657668738 },
    zoom: 15, 
    styles: [
      {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 65
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": "50"
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": "-100"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": "30"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [
              {
                  "lightness": "40"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "hue": "#ffff00"
              },
              {
                  "lightness": -25
              },
              {
                  "saturation": -97
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels",
          "stylers": [
              {
                  "lightness": -25
              },
              {
                  "saturation": -100
              }
          ]
      }
  ]
  });
}

window.initMap = initMap;
 

const hamburger = document.getElementById('menu-btn')
const headerMenuLeft = document.getElementById('menu-left') 
const headerMenuRight = document.getElementById('menu-right')
const menuLinks = document.querySelectorAll('.menu-link') 


hamburger.addEventListener('click', () => { 
    headerMenuLeft.classList.toggle('menu-left--active')  
    headerMenuRight.classList.toggle('menu-right--active')   
})

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerMenuLeft.classList.remove('menu-left--active')  
    headerMenuRight.classList.remove('menu-right--active') 
  })
})  