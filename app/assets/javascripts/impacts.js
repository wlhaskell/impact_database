// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function (){

    function initialize() {

      var mapOptions = {
      center: { lat: 46.837518, lng: -113.098103},
      zoom: 3
      };
        
      var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);   

      for (i=0;i < coord.length;i++){
    			
    			console.log(coord[i][0] + ", " + coord[i][1]);
    			console.log(names[i]);
    			
    			var myLatlng = new google.maps.LatLng(coord[i][0],coord[i][1]);

    			new google.maps.Marker({
      			position: myLatlng,
      			map: map,
      			title: names[i]
    			});

  			};
    };
      
    google.maps.event.addDomListener(window, 'load', initialize);
});