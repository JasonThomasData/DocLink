$(document).ready(function(){
    $('#fullpage').fullpage();  //Function to get the scroller going

    var languages = ['English', 'العربية', 'اردو']; //You'll need to have translations for each of these
    var translatedNames = ['English', 'Arabic', 'Urdu']
    var languageChosen = 'English';
    var languageTranslation = 'English'; //Upon implementaion of the translation object, I may not need these.
    for (i=0; i< languages.length; i++){
        $('#firstSection').append('<h2>');
        $('#firstSection h2:last-child').html(languages[i]).attr('class', 'languageButton').val(translatedNames[i]);  //I may not need to add val() in future, since the language translation object may make that irrelevant.
    };

    //I've been told before that I was doing jQuery backwards, I need to re-read how and do these above functions again.

    var map = L.map('map').setView([0, 0], 13); //Set the zoom level to fit in the closest 10 options, get the zoom of that and set it to that.
    //Set the tile max and min zoom options to suit the map's max and min zoom options.
    OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var features = geoJsonData.features;
    var markers = [];

    function placeMarkers(){
        // I may not need the below condition after some time, since the map mauy only show the GPs that apply to the user's search.
        // But it may still be useful to provide feedback to the user for what they search for is returned.
        if (languageChosen != 'English'){
            var languageSupportedString = '<h3>Is ' + languageChosen + ' supported: yes/no </h3>';
        } else {
            var languageSupportedString = '';
        }

        //To do - add a condition to check each marker is allowed, according to the user's preferences. - Bulk billing, language.
        //This may possibly make the above condition irrelevant
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
            map.setView([yourPos[1], yourPos[0]], 13); //This was not previously working, but do I need to have the 13 here? Maybe that's why?
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLatLong)
        } else {
            // "Not supported."
            // Have a prompt that tells users their location was not detected, and ask them to enter it manually.
            // People could call their case worker to get those details.
            // Would that defeat the purpose?
            // Possibly not worth it, if the intention is to make people more reliant on their own, and not use their case worker.
        }
    }
    getYourPos()
*/

    //To do - find the fullPage function that allows scrolling on mousewheel and arrows down and up. 
    //Disable those.

    //Create an object with English words, and translations into several languages. Every English word should be its own object, with the names of foreign languages as identifiers, and the translated words as values.
    //This could replace the array.

    function moveDown(elem){
        $(elem).css('background-color', '#7AC3C3') //Set the button to a different colour, so the user knows what they've clicked on.
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