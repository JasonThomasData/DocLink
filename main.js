$(document).ready(function(){
    $('#fullpage').fullpage();  //Function to get the scroller going
    
    var languages = ['English', 'العربية', 'اردو']; //You'll need to have translations for each of these
    var translatedNames = ['English', 'Arabic', 'Urdu']
    var languageChosen = 'English';
    var languageTranslation = 'English'; 
    for (i=0; i< languages.length; i++){
        $('#firstSection .fp-tableCell').append('<h2>');
        $('#firstSection h2:last-child').html(languages[i]).attr('class', 'languageButton').val(translatedNames[i]);
    };

    $('#lastSection .fp-tableCell').append('<div>');
    $('#lastSection div').attr('id', 'map');
    
    var map = L.map('map').setView([0, 0], 13);
    OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var features = geoJsonData.features;
    var markers = [];

    function placeMarkers(){
        if (languageChosen != 'English'){
            var languageSupportedString = '<h3>Is ' + languageChosen + ' supported: yes/no </h3>';
        } else {
            var languageSupportedString = '';
        }
        //Add a condition to check each marker is allowed, according to the user's preferences. - Bulk billing, language.
        for (j=0; j < features.length; j++){
            var markerLat = geoJsonData.features[j].geometry.coordinates[0];
            var markerLng = geoJsonData.features[j].geometry.coordinates[1];
            var popupContent = '<h3>' + features[j].properties.PracticeName + '</h3>' +
                languageSupportedString +
                '<h3>Address: ' + features[j].properties.Address + '</h3>' +
                '<h3>Phone number: ' + features[j].properties.PhoneNumber + '</h3>'
            var marker = L.marker([markerLng, markerLat]).bindPopup(popupContent);
            markers.push(marker);
        }
        L.layerGroup(markers).addTo(map);
    }

//For testing --
    var yourPos = [-33.9280681,150.9102578];

//To be used in Liverpool
/*
    var yourPos = []
    function getYourPos(){
        function getLatLong(position){
            yourPos.push(position.coords.longitude);
            yourPos.push(position.coords.latitude);
            console.log(yourPos[1], yourPos[0])
            map.setView([yourPos[1], yourPos[0]]);
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLatLong)
        } else {
            //     "Not supported."
        }
    }
    getYourPos()
*/
    //To do - find the fullPage function that allows scrolling on mousewheel and arrows down and up. 
    //Disable those.

    //Create an object with English words, and translations in several languages. Every English word should be its own object, with foreign language identifiers.
    //This could replace the array.

    function moveDown(elem){
        $(elem).css('background-color', '#7AC3C3')
        setTimeout(function(){
            $.fn.fullpage.moveSectionDown();
        }, 500);
    }

    $('.languageButton').on('click',function(){
        languageChosen = $(this).html();
        languageTranslation = $(this).val(); //Remind me, what was the point of this? Could I replace this with those details in the translation dictionary (object) and do away with this stuff?
        var htmlToShow = languageChosen + ' (' + languageTranslation + ')'
        $('#languageHere').html(htmlToShow)
        moveDown(this);
    });

    $('#locationButton').on('click', function(){
        map.setView([yourPos[0], yourPos[1]]);
        console.log(languageChosen);
        placeMarkers();
        //Upon fail, prompt the user to enter their address, or call their case manager
        moveDown(this);
    });

    $('#bottomButton').on('click', function(){
        $('.languageButton').css('background-color', '#FFF')
        $('#locationButton').css('background-color', '#FFF')        
        $.fn.fullpage.moveTo(1); //Return to start
        //Reset all vars, all functions
    });

});