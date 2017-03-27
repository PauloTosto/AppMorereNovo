jQuery(document).ready(function () {

    $('#nav li a').bind('click', function () {

        $('.row').hide();

        $('#myCarousel1').remove();
        $('#myCarousel2').remove();
        $('#myCarousel3').remove();
        $('#myCarousel4').remove();

        var index = 0;
        var path = $(this).attr('id');
        var wtam = MyNames.length;
        for (var w = 0; w < wtam; w++) {
            var item = MyNames[w].Titulo;
            if (item != path) {
                continue;
            }
            index = w;
            w = wtam;
        }

        var tam = MyNames[index].Fotos.length;
        var numcarousel = tam / 4;
        if ((tam % 4) != 0)
        {
            numcarousel++;
        }

        if (numcarousel > 0) {
            $('#meu1').append('<div id="myCarousel1" class="carousel slide" data-ride="carousel" data-interval="1000">' +
                '<ol class="carousel-indicators"></ol>' +
                '<div class="carousel-inner" role="listbox">' +
                '</div>' +
                '<a class="left carousel-control" href="#myCarousel1" role="button" data-slide="prev">' +
                '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
                '<span class="sr-only">Prev</span>' +
                '</a>' +
                '<a class="right carousel-control" href="#myCarousel1" role="button" data-slide="next">' +
                '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
                '<span class="sr-only">Next</span>' +
                '</a>' +
                '</div>').hide();
        }
        if (numcarousel > 1) {

            $('#meu2').append('<div id="myCarousel2" class="carousel slide" data-ride="carousel" data-interval="1000">' +
                '<ol class="carousel-indicators"></ol>' +
                '<div class="carousel-inner" role="listbox">' +
                '</div>' +
                '<a class="left carousel-control" href="#myCarousel2" role="button" data-slide="prev">' +
                '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
                '<span class="sr-only">Prev</span>' +
                '</a>' +
                '<a class="right carousel-control" href="#myCarousel2" role="button" data-slide="next">' +
                '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
                '<span class="sr-only">Next</span>' +
                '</a>' +
                '</div>').hide();
        }
        if (numcarousel > 2) {

            $('#meu3').append('<div id="myCarousel3" class="carousel slide" data-ride="carousel" data-interval="1000">' +
                '<ol class="carousel-indicators"></ol>' +
                '<div class="carousel-inner" role="listbox">' +
                '</div>' +
                '<a class="left carousel-control" href="#myCarousel3" role="button" data-slide="prev">' +
                '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
                '<span class="sr-only">Prev</span>' +
                '</a>' +
                '<a class="right carousel-control" href="#myCarousel3" role="button" data-slide="next">' +
                '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
                '<span class="sr-only">Next</span>' +
                '</a>' +
                '</div>').hide();
        }
        if (numcarousel > 3) {

            $('#meu4').append('<div id="myCarousel4" class="carousel slide" data-ride="carousel" data-interval="1000">' +
                '<ol class="carousel-indicators"></ol>' +
                '<div class="carousel-inner" role="listbox">' +
                '</div>' +
                '<a class="left carousel-control" href="#myCarousel4" role="button" data-slide="prev">' +
                '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
                '<span class="sr-only">Prev</span>' +
                '</a>' +
                '<a class="right carousel-control" href="#myCarousel4" role="button" data-slide="next">' +
                '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
                '<span class="sr-only">Next</span>' +
                '</a>' +
                '</div>').hide();

        }



        
        var num_meu = 1;
        var z = 0;
        var i = 0;
        
        for (var y = 0; y < tam; y++) {
            var imgDir = MyNames[index].Caminho + MyNames[index].Fotos[y];

            if (z == 4)
            { z = 0; num_meu = num_meu + 1; }

            var activo = "active";

            if (z == 0) {

                $('#meu' + num_meu + ' .carousel-indicators').append('<li data-target="#myCarousel' + num_meu + '" data-slide-to="' + z + '" class="active"></li>');
                $('#meu' + num_meu + ' .carousel-inner').append('<div class="item active"><img src="' + imgDir + '" alt="1" class="img-responsive" /></div>');

            }
            else {
                $('#meu' + num_meu + ' .carousel-indicators').append('<li data-target="#myCarousel' + num_meu + '" data-slide-to="' + z + '"></li>');
                $('#meu' + num_meu + ' .carousel-inner').append('<div class="item"><img src="' + imgDir + '" alt="' + z + '" class="img-responsive" /></div>');
            }
            z = z + 1;

        }

        max_numero = numcarousel + 1;

        for (var num_meu = 1; num_meu < max_numero; num_meu++) {
           
           // $('#myCarousel' + num_meu).attr('data-ride', "carousel");
            $('#myCarousel' + num_meu).carousel({
                interval: "3000", cycle: true, pause: false
            });
          
            $('#meu' + num_meu).show();


        }

        $('.row').show();

        //if (max_numero < 5) {
        //    for (var num_meu = max_numero; num_meu < 5; num_meu++) {
        //        $('#myCarousel' + num_meu).remove();
        //    }
        //}
        
        //  $("#myid").removeClass("hide");
    });
    $('#nav li a').eq(0).click();
});


