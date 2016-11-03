// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).on("ready", function() {
//   var source = $('#earthquake-li-templete').html();
//   console.log('template script source:', source);
//
//   var template = Handlebars.compile(source);
//
//   var developerHtml = template({ earthquakes: data.features });
//   console.log('generated html string:', developerHtml);
//
//   $("#earthquake-list").append(developerHtml);

function getQuakes(){
  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    dataType: 'JSON',
    success: onSuccess
  });
}
function onSuccess(json){
  var source = $('#earthquake-li-templete').html();
  var template = Handlebars.compile(source);
  var quakesHtml = template({earthquakes: json.features})
  $('#earthquake-list').append(quakesHtml);
  dropPins(json);
}

  function dropPins(json) {
    console.log('dropPins works');
  for (var i = 0; i < json.features.length; i++) {
    console.log('right coordinates');
  var coords = json.features[i].geometry.coordinates;
  var latLng = new google.maps.LatLng(coords[1],coords[0]);
  var marker = new google.maps.Marker({
   position: latLng,
   map: map
  });
  }
  }

getQuakes();
});
