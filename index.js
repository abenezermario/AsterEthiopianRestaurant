// $(document).ready(function() {
//     $("button").on("click", function() {
//       if ($(this).hasClass("nav-button")) {
//         $("nav div").addClass("show");
//       } else if ($(this).hasClass("exit-menu")) {
//         $("nav div").removeClass("show");
//       } else if ($(this).hasClass("to-top")) {
//         $("html,body").animate({ scrollTop: 0 }, "slow");
//       }
//     });
  
//     AOS.init({
//       duration: 1800,
//       easing: "ease"
//     });
//   });
//   $('.gn-icon-menu').hover(function(){
//     $('.gn-menu-wrapper').toggleClass('gn-open-part');
//   });
  
//   $('.gn-menu-wrapper').hover(function(){
//     $(this).toggleClass('gn-open-all');
//   })
// by: George Olaru https://dribbble.com/shots/1560982-Rosa-Restaurant-Website/attachments/239212

$(document).ready(function() {
  
  $('button').on('click', function() {
    if($(this).hasClass('nav-button')) {
      $('nav div').addClass('show');
    } else if($(this).hasClass('exit-menu')) {
      $('nav div').removeClass('show');
    } 
    else if($(this).hasClass('to-top')) {
      $('html,body').animate({scrollTop:0}, 'slow');
    }
  });

  AOS.init({      
        duration: 1800,
    easing: 'ease'
  });
   
})
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJ1Y2h1azI5IiwiYSI6ImNrbjVpMDZ0MTA0ZjAyd3JnYjkwdzM3bHgifQ.fdprgMW7MbenN9kcxDzsQA';
var geojson = {
  'type': 'FeatureCollection',
  'features': [
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-77.032, 38.913]
      },
      'properties': {
        'title': 'Mapbox',
        'description': 'Washington, D.C.'
      }
    },
    {
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [-122.414, 37.776]
      },
      'properties': {
        'title': 'Mapbox',
        'description': 'San Francisco, California'
      }
    }
  ]
};

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-96, 37.8],
  zoom: 3
});

// add markers to map
geojson.features.forEach(function (marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.className = 'marker';

  // make a marker for each feature and add it to the map
  new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          '<h3>' +
            marker.properties.title +
            '</h3><p>' +
            marker.properties.description +
            '</p>'
        )
    )
    .addTo(map);
});
