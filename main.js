$(document).ready(function(){
    $('#fullpage').fullpage();  //Function to get the scroller going

    function _init_(languageDictionary){
        var languages = languageDictionary["Translated names"] //You'll need to have translations for each of these. These are in the languageDict file
        var translatedNames = Object.keys(languages); 
        for (language in languages){
            var $newTag = $('<h2>')
            $newTag.html(languages[language]).attr('class', 'languageButton').attr('value', language);
            $('#firstSection').append($newTag);
        };

        var bodyHeight = parseInt($('body').css('height'));
        var topButtonHeight = parseInt($('#topButton').css('height'));
        var bannersHeight = topButtonHeight + parseInt($('#bottomButton').css('height'));
        var fontRatios = {
            h2: 0.0374,    //Ideal height of 642, font size of 24 -- 24/642
            h3: 0.0280,    //18 -- 18/642
            p: 0.0249      //16 -- 18/642
        }
        for(var fontSize in fontRatios){
            $(fontSize).each(function(i, el){
                $(el).css('font-size',(fontRatios[fontSize] * bodyHeight))
            })
        }
        $('#map').css('height', bodyHeight - bannersHeight);
        $('#map').css('top', 0); //Not working in the stylesheet

        var map = L.map('map').setView([0, 0], 13); //Set the zoom level to fit in the closest 10 options, get the zoom of that and set it to that.
        //Set the tile max and min zoom options to suit the map's max and min zoom options.
        OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var features = geoJsonData.features;
        var markerIndex = []

        function placeMarkers(){
            var markerPos = [];
            //To do - add a condition to check each marker is allowed, according to the user's preferences. - Bulk billing, language.
            //This may possibly make the above condition irrelevant
            //How to make this larger?
            for (j=0; j < features.length; j++){
                var markerLat = features[j].geometry.coordinates[0];
                var markerLng = features[j].geometry.coordinates[1];
//                var popupContent = '<h3>' + features[j].properties.PracticeName + '</h3>' +
//                    '<h3>Address: ' + features[j].properties.Address + '</h3>' +
//                    '<h3>Phone number: ' + features[j].properties.PhoneNumber + '</h3>'
                var marker = L.marker([markerLng, markerLat])//.bindPopup(popupContent);
                console.log(j)
                marker.on('click', function(e){
                    console.log(j)
                    $('#tooltipBackButton').css('background-color', '#FFF')
                    //HEY!! This function below works because I know the section number.
                    $.fn.fullpage.moveTo(5);
                })
                markerPos.push(marker);
                markerIndex.push(j)
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

        function moveToPage(elem, i, slide){
            $(elem).css('background-color', '#C5CACA') //Set the button to a different colour, so the user knows what they've clicked on.
            setTimeout(function(){
                if (slide == null){
                    $.fn.fullpage.moveTo(i);                    
                } else {
                    $.fn.fullpage.moveTo(i, slide);
                }
            }, 400);
        }

        $('.languageButton').on('click',function(){
            var languageChosen = $(this).attr('value');
            //This translation works for the entire site.
            if(languageChosen != 'English'){
                $(".translationSmallFont").each(function (i, el) { //Seems you need i as a placeholder, so you can access the second param
                    $(el).html('')
                    var parentHtml = $(el).parent().text();
                    var translation = languageDictionary["Translated terms"][parentHtml][languageChosen];
                    $(el).html('<br>' + translation);
                });
            }
            moveToPage(this, 3, null);
        });

        $('#locationButton').on('click', function(){
            map.setView([yourLng, yourLat]);
            placeMarkers();
            //Upon fail, prompt the user to enter their address, or call their case manager
            moveToPage(this, 4, null);
        });

        $('#bottomButton').on('click', function(){
            //$.fn.fullpage.moveToPage(4,1);
            $('.languageButton').css('background-color', '#FFF')
            $('#locationButton').css('background-color', '#FFF')        
            $('#tooltipBackButton').css('background-color', '#FFF')
            $.fn.fullpage.moveTo(2); //Return to start
            $(".translationSmallFont").text('')
            //TO DO - Reset all vars, all functions
        });

        $('#topButton').on('click', function(){
            $.fn.fullpage.moveTo(1); //Go to the about menu
        });

        $('#tooltipBackButton').on('click', function(){
            moveToPage(this, 4, null);  //HEY!! This function below works because I know the section number.
        });
    }

    //You don't need to put everything in a callback for this, since it's so small.
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