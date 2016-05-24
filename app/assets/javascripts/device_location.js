$(document).ready(function() {

	function putAddressInSearchBox(formattedAddress) {
		$('#q').val(formattedAddress) //So that the user can search for this. 
	}

	function formatAPIcall(lat, lng) {
		var googleAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address='
		var queryString = lat + ',' + lng
		return geocodeURL = googleAPI + queryString
		//EG - https://maps.googleapis.com/maps/api/geocode/json?address=-33.8078584,151.1799006
	}

	function reverseGeocode(geocodeURL, callback) {
		$.get(geocodeURL, function(dataFromGoogle) {
			var formattedAddress = selectAddress(dataFromGoogle)
			putAddressInSearchBox(formattedAddress)
		})
	}

	function selectAddress(dataFromGoogle) {
		console.log(dataFromGoogle)
		return dataFromGoogle.results[1].formatted_address
	}

	function success(position) {
	    var lat = position.coords.latitude;
	    var lng = position.coords.longitude;
	    var geocodeURL = formatAPIcall(lat,lng)
	    reverseGeocode(geocodeURL)
	}

	function error() {
	    alert("We are unable to find your address")
	}

	function getLatLng() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(success, error)
	    }
	}

	$('#get_location').click(function(){
		getLatLng();
	});

});