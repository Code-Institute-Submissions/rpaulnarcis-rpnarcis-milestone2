function initMap(){
   var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 12,
       center: {
           lat:18.4209,
           lng:-64.6167
       }
   });


var labels ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    {lat: 18.4208, lng: -64.6181},
    {lat: 18.4194, lng: -64.6186},
    {lat: 18.4190, lng: -64.6186},
    {lat: 18.4221, lng: -64.6186}
   
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        map: map,
        label: labels[i % labels.length]
    });
});


 var map1 = new google.maps.Map(document.getElementById('map1'), {
       zoom: 12,
       center: {
           lat:18.5166,
           lng:-77.8828
       }
   });

   var labels ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    {lat: 18.5145, lng: -77.8813},
    {lat: 18.5148, lng: -77.8808},
    {lat: 18.5143, lng: - 77.8806}
    
   
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        map: map1,
        label: labels[i % labels.length]
    });
});

var map2 = new google.maps.Map(document.getElementById('map2'), {
       zoom: 12,
       center: {
           lat:13.0639,
           lng:-59.5645
       }
   });

   var labels ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    {lat: 13.0669, lng: -59.5712},
    {lat: 13.0666, lng: -59.5688},
    {lat: 13.0674, lng: -59.5695}
    
   
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        map: map2,
        label: labels[i % labels.length]
    });
});

var map3 = new google.maps.Map(document.getElementById('map3'), {
       zoom: 12,
       center: {
           lat:19.3394,
           lng:-81.3810
       }
   });

   var labels ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    {lat: 19.3313, lng: -81.3815},
    {lat: 19.3312, lng: -81.3809},
    {lat: 19.3318, lng: -81.3809},
    {lat: 19.3318, lng: -81.3807}
    
   
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        map: map3,
        label: labels[i % labels.length]
    });
});

var map4 = new google.maps.Map(document.getElementById('map4'), {
       zoom: 12,
       center: {
           lat:14.6023,
           lng:-61.0731
       }
   });

   var labels ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    {lat: 14.6023, lng: -61.0728},
    {lat: 14.6022, lng: -61.0729},
    {lat: 14.6022, lng: -61.0727}
    
   
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        map: map4,
        label: labels[i % labels.length]
    });
});

var map5 = new google.maps.Map(document.getElementById('map5'), {
       zoom: 12,
       center: {
           lat:12.5159,
           lng:-70.0365
       }
   });

   var labels ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    {lat: 12.5165, lng: -70.0372},
    {lat: 12.5168, lng: -70.0369},
    {lat: 12.5168, lng: -70.0371}
    
   
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        map: map5,
        label: labels[i % labels.length]
    });
});

var map6 = new google.maps.Map(document.getElementById('map6'), {
       zoom: 12,
       center: {
           lat:11.1576,
           lng:-60.8388
       }
   });

   var labels ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    {lat: 11.15715, lng: -60.8375},
    {lat: 11.1575, lng: -60.8368},
    {lat: 11.1587, lng: -60.8364}
    
   
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        map: map6,
        label: labels[i % labels.length]
    });
});
var markerCluster =  new MarkerClusterer(map6, markers,  
    {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
}





