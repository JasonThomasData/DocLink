function showAddress(lat, lng){
	alert(lat + ' ' + lng)
}

function formatAPIcall(lat, lng){
	var googleAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address='
	var queryString = lat + ',' + lng
	return geocodeURL = googleAPI + queryString
	//EG - https://maps.googleapis.com/maps/api/geocode/json?address=-33.8078584,151.1799006
}

function reverseGeocode(geocodeURL, callback){
	$.get(geocodeURL, function(dataFromGoogle){
		var formattedAddress = selectAddress(dataFromGoogle)
		alert(formattedAddress)
	})
}

function selectAddress(dataFromGoogle){
	return dataFromGoogle.results[0].formatted_address
}

function success(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var geocodeURL = formatAPIcall(lat,lng)
    showAddress(lat, lng)
    reverseGeocode(geocodeURL)
}

function error() {
    //return 'Error'
}

function getLatLng() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error)
    }
}

$(document).ready(function(){
	getLatLng();
});