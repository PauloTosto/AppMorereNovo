//This code tells the browser to execute the 'Initialize' method only when the complete document model has been loaded.
//$(document).ready(function () {
//  Initialize();
//});
$(function () {

    // Where all the fun happens
    function Initialize() {


        // Google has tweaked their interface somewhat - this tells the api to use that new UI
        google.maps.visualRefresh = true;

        var Sitio = new google.maps.LatLng(-13.615988, -38.905627);
        // These are options that set initial zoom level, where the map is centered globally to start, and the type of map to show
        var mapOptions = {
            zoom: 18,
            center: Sitio,
            mapTypeId: google.maps.MapTypeId.HYBRID
        };

        // This makes the div with id "map_canvas" a google map
        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

        // a sample list of JSON encoded data of places to visit in Tunisia
        // you can either make up a JSON list server side, or call it from a controller using JSONResult

        var data = [
                  {
                      "Id": 1, "PlaceName": "Moreré", "GeoLong": "-13.609627", "GeoLat": "-38.907027",
                      "Url": ["\"../SitioOuteiro/img/bainema/foto007.JPG\"", "\"../SitioOuteiro/img/bainema/foto002.JPG\""],
                      "frase":"Venha passar as férias com a gente e sinta a delícia de ser o que é "
                  },
                  {
                      "Id": 2, "PlaceName": "Boipeba", "GeoLong": "-13.582628", "GeoLat": "-38.929235",
                      "Url": ["\"../SitioOuteiro/img/bainema/foto008.JPG\"", "\"../SitioOuteiro/img/bainema/foto001.JPG\"", "\"../SitioOuteiro/img/sitio2/sitioatarde.JPG\""],
                      "frase": "Coma lagosta e fique na sombra e água fresca "
                  },
                  {
                      "Id": 3, "PlaceName": "Bainema", "GeoLong": "-13.629052", "GeoLat": "-38.900172",
                      "Url": ["\"../SitioOuteiro/img/bainema/foto007.JPG\"", "\"../SitioOuteiro/img/bainema/foto008.JPG\""]
                  },
                  {
                      "Id": 4, "PlaceName": "Castelheanos", "GeoLong": "-13.665112", "GeoLat": "-38.897990",
                      "Url": ["\"../SitioOuteiro/img/bainema/foto001.JPG\"", "\"../SitioOuteiro/img/bainema/foto002.JPG\""]
                  },
                  {
                      "Id": 5, "PlaceName": "Sitio Outeiro ", "GeoLong": "-13.615988", "GeoLat": "-38.905627",
                      "Url": ["\"../SitioOuteiro/img/bainema/foto001.JPG\"", "\"../SitioOuteiro/img/bainema/foto008.JPG\"", "\"../SitioOuteiro/img/bainema/foto001.JPG\"", "\"../SitioOuteiro/img/bainema/foto002.JPG\""],
                      "frase": "Casa,comida e roupa lavada"
                  }
        ];



       



        // Using the JQuery "each" selector to iterate through the JSON list and drop marker pins
        $.each(data, function (i, item) {
            var marker = new google.maps.Marker({
                'position': new google.maps.LatLng(item.GeoLong, item.GeoLat),
                'map': map,
                'title': item.PlaceName
            });

            // Make the marker-pin blue!
            marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png')

            // put in some information about each json object - in this case, the opening hours.

            // montagem do carrousel
            var numlinhas = item.Url.length;
            var li_target = "<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>";

            var item_target = "<div class=\"item active\">" +
                "<img src=" + item.Url[0] + " alt=\"foto1\" class=\"img-responsive\" />" + "</div>";

            for (var z = 1; z < numlinhas; z++)
            {
                li_target = li_target +
                    "<li data-target=\"#myCarousel\" data-slide-to=\"" + z.toString + "\"></li>";
                item_target = item_target  +
                    "<div class=\"item\">" +
                    "<img src=" + item.Url[z] + " alt=\"foto" + z.toString+"\" class=\"img-responsive\" />" + "</div>";
            }

            var carrousel =   "<div class=\"row\" style=\"margin:0 auto;max-width:310px\">"+

            "<div class=\"col-md-3\" id=\"meu\" style=\"max-width:500px;max-height:375px;width:auto;height:auto margin:0 auto\">" +
                "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"4000\">" +
                "<ol class=\"carousel-indicators\">" +
                         li_target+
                     //"<li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>" +
                     //"<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>" +
                 
                     "</ol>" +
                "<div class=\"carousel-inner\" role=\"listbox\">" +
                       item_target+
                       //"<div class=\"item active\">" +
                       //   "<img src=" + item.Url[0] + " alt=\"foto1\" class=\"img-responsive\" />" + "</div>" +
                       //"<div class=\"item\">" +
                       //    "<img src=" + item.Url[1] + " alt=\"foto2\" class=\"img-responsive\" />" + "</div>" +
                    "</div>" +

                "<a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">" +
                          "<span class=\"glyphicon glyphicon-chevron-left\"aria-hidden=\"true\"></span>" +
                          "<span class=\"sr-only\">Prev</span>" +
                     "</a>" +
                     "<a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">" +
                           "<span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>" +
                            "<span class=" + 'sr-only' + ">Next</span>" +
                      "</a>" +
            "</div></div></div>";





            var infowindow = new google.maps.InfoWindow({
                content: "<div class='infoDiv'  >"
                + "<h6>" + item.PlaceName + "</h6>"
                + "<p> " + item.frase + "  <p>"

                             + carrousel
                          + "</div>"
            });

            // finally hook up an "OnClick" listener to the map so it pops up out info-window when the marker-pin is clicked!
            google.maps.event.addListener(marker, 'click', function () {
                infowindow.open(map, marker);
            });

            //var styles = [{ "featureType": "landscape", "stylers": [{ "saturation": -100 }, { "lightness": 65 }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "road.arterial", "stylers": [{ "saturation": -100 }, { "lightness": 30 }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "saturation": -100 }, { "lightness": 40 }, { "visibility": "on" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "lightness": -25 }, { "saturation": -100 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "hue": "#ffff00" }, { "lightness": -25 }, { "saturation": -97 }] }];

            //            map.set('styles', styles);


        })
    }
    google.maps.event.addDomListener(window, 'load', Initialize);
})