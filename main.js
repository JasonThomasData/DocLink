$(document).ready(function(){
    $('#fullpage').fullpage();  //Function to get the scroller going

    function _init_(languageDictionary){
        var languages = languageDictionary["Translated names"] //You'll need to have translations for each of these
        var translatedNames = Object.keys(languages); //Add these from the languageDict eventually, so that this becomes more scalable
        for (language in languages){
            var $newTag = $('<h2>')
            $newTag.html(languages[language]).attr('class', 'languageButton').attr('value', language);
            $('#firstSection').append($newTag);
        };

        //I've been told before that I was doing jQuery backwards, I need to re-read how and do these above functions again.

        var bodyHeight = parseInt($('body').css('height'));
        var topButtonHeight = parseInt($('#topButton').css('height'));
        var bannersHeight = topButtonHeight + parseInt($('#bottomButton').css('height'));
        console.log(bodyHeight);
        $('#map').css('height', bodyHeight - bannersHeight);
        $('#map').css('top', topButtonHeight);

        var map = L.map('map').setView([0, 0], 13); //Set the zoom level to fit in the closest 10 options, get the zoom of that and set it to that.
        //Set the tile max and min zoom options to suit the map's max and min zoom options.
        OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var features = geoJsonData.features;
        var markerPos = [];

        function placeMarkers(){
            // I may not need the below condition after some time, since the map mauy only show the GPs that apply to the user's search.
            // But it may still be useful to provide feedback to the user for what they search for is returned.

            //To do - add a condition to check each marker is allowed, according to the user's preferences. - Bulk billing, language.
            //This may possibly make the above condition irrelevant
            for (j=0; j < features.length; j++){1
                var markerLat = features[j].geometry.coordinates[0];
                var markerLng = features[j].geometry.coordinates[1];
                var popupContent = '<h3>' + features[j].properties.PracticeName + '</h3>' +
                    '<h3>Address: ' + features[j].properties.Address + '</h3>' +
                    '<h3>Phone number: ' + features[j].properties.PhoneNumber + '</h3>'
                var marker = L.marker([markerLng, markerLat]).bindPopup(popupContent);
                markerPos.push(marker);
            }
            L.layerGroup(markerPos).addTo(map);
        }

    //For testing
        var yourLat = 150.9102578;
        var yourLng = -33.9280681;

    //To be used in Liverpool
        function getYourPos(){
            function getLatLong(position){
        //        yourLat = position.coords.longitude;
        //        yourLng = position.coords.latitude;
                map.setView([yourLng,yourLat]); //This was not previously working, but do I need to have the 13 here? Maybe that's why?
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
    
        //To do - find the fullPage function that allows scrolling on mousewheel and arrows down and up. 
        //Disable those.

        //Create an object with English words, and translations into several languages. Every English word should be its own object, with the names of foreign languages as identifiers, and the translated words as values.
        //This could replace the array.

        var checkBoxOptions = {
            bulkBilling: true,
            translator: false
        }   
        //Set the options here, don't touch them html.

        function updateMarkers(elemName, elem){
            var circleMarker = $(elem).children('i');
            if(checkBoxOptions[elemName] == true){
                circleMarker.attr('class', 'fa fa-circle')
            } else {
                circleMarker.attr('class', 'fa fa-circle-thin')
            } 
        }

        $('.checkbox').each(function(i, elem){
            var elemName = $(elem).attr('name');
            updateMarkers(elemName, elem);
        })

        $('.checkbox').on('click', function(){
            var $elem = $(this);
            var elemName = $elem.attr('name');
            if (checkBoxOptions[elemName] == true){
                checkBoxOptions[elemName] = false;
            } else {
                checkBoxOptions[elemName] = true;
            }
            updateMarkers(elemName, $elem);
        });

        function moveDown(elem){
            $(elem).css('background-color', '#C5CACA') //Set the button to a different colour, so the user knows what they've clicked on.
            setTimeout(function(){
                $.fn.fullpage.moveSectionDown();
            }, 500);
        }

        $('.languageButton').on('click',function(){
            var languageChosen = $(this).attr('value');
            if(languageChosen != 'English'){
                $(".translationSmallFont").each(function (i, el) { //Seems you need i as a placeholder, so you can access the second param
                    $(el).html('')
                    var parentHtml = $(el).parent().text();
                    var translation = languageDictionary["Translated terms"][parentHtml][languageChosen];
                    $(el).html('<br>' + translation);
                    //$(el).text(' (' + translation + ')')
                });
            }
            moveDown(this);
        });

        $('#locationButton').on('click', function(){
            map.setView([yourLng, yourLat]);
            placeMarkers();
            //Upon fail, prompt the user to enter their address, or call their case manager
            moveDown(this);
        });

        $('#bottomButton').on('click', function(){
            $('.languageButton').css('background-color', '#FFF')
            $('#locationButton').css('background-color', '#FFF')        
            $.fn.fullpage.moveTo(2); //Return to start
            $(".translationSmallFont").text('')
            //TO DO - Reset all vars, all functions
        
        });

        $('#topButton').on('click', function(){
            $.fn.fullpage.moveTo(1); //Return to start
        });

    }

    $.get("languageDict.json", function(languageDictionary){
        _init_(languageDictionary)
    });
    /* You can't have comments in a JSON file, so here are some.
    //Every language must have these English terms translated - "Start again", "Has a translator available", "Find doctors", "What do these words mean?",
    /*This project will need all of these language translations -

        Arabic: "البدء من جديد",
        French: "Recommencer",
        Urdu: "",
        Pashto: "",
        Burmese: "", //Do I need Rohingya and Karen dialects for this to be useful?
        Farsi: "",
        Tamil: "",
        Kurdish: ""
    */

    //This is a list of languages available on this website - https://www.tisnational.gov.au/en/Agencies/Help-using-TIS-National-services/Languages-available-through-TIS-National

});