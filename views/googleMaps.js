function createMarker(place){
    console.log(place)
    if (!place.geometry || !place.geometry.location) return;

    let la = place.geometry.location.lat()
    let lo = place.geometry.location.lng()
    
    console.log(la, lo)

    const LatLang = {lat: la, lng: lo };

    const marker = new google.maps.Marker({
        position: LatLang,
        map: map
    });

    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        // infowindow.open(mapp);
    });
}


let map;
let infowindow;
function initMap(Location, latitude, longitude) {

    console.log(latitude, longitude, "KFC");
    const currLocation = new google.maps.LatLng(latitude, longitude);
    console.log(currLocation);
    infowindow = new google.maps.InfoWindow()

    map = new google.maps.Map(document.getElementById("mapView"), {
        center:{lat: latitude, lng: longitude },
        zoom: 15,
    });

    const request = {
        query: Location,
        fields: ['name', 'geometry.location'],
    }

  
    var service = new google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, callback); 
    
    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log(results.length);
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }
    };
}