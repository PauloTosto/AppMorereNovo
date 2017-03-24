jQuery(document).ready(function () {

    $('#nav li a').bind('click', function () {

        $('.row').hide();

        $('#myCarousel1').remove();
        $('#myCarousel2').remove();
        $('#myCarousel3').remove();
        $('#myCarousel4').remove();

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
            '</div>');
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
            '</div>');

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
            '</div>');

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
            '</div>');




        var chave = $(this).attr('rel');

        //var MyNames = JSON.parse('@Html.Raw(Newtonsoft.Json.JsonConvert.SerializeObject(modelo))');

        //var MyNames = JSON.parse(modelonovo);
        var tam = MyNames.length;
        var path = $(this).attr('id');
        var num_meu = 1;
        var z = 0;
        var i = 0;
        //var numcarousel = 1;
        for (var y = 0; y < tam; y++) {
            var item = MyNames[y].Titulo;
            if (item != path) {
                continue;
            }
            var imgDir = MyNames[y].Caminho + MyNames[y].Foto;

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

           $('.row').show();
                for (var num_meu = 1; num_meu < 5; num_meu++) {
                    // $('#myCarousel' + num_meu + ' .right').click();
                    //$('#meu3').append('<div id="myCarousel3" class="carousel slide" data-ride="carousel" d
                    //$('#meu' + num_meu + ' #myCarousel3').attr('data-ride')
                    $('#myCarousel' + num_meu).attr('data-ride', "");
                  
                    $('#myCarousel' + num_meu).attr('data-ride', "carousel");
                    if ((num_meu % 2) == 0) {
                        $('#myCarousel' + num_meu).carousel({
                            interval: "1000", cycle: true, pause: false
                        })
                    }
                    else
                    {
                        $('#myCarousel' + num_meu).carousel({
                            interval: "2000", cycle: true, pause: false
                        })


                    }

                    //    $('#myCarousel' + num_meu + ' .right').click();
                  //  $('#meu' + num_meu).mouseenter();
                   // $('#meu' + num_meu).mousemove();
                    //$('#meu' + num_meu).click();
                    //$('#meu' + num_meu).mouseleave();

                }

        //  $("#myid").removeClass("hide");
    });
    $('#nav li a').eq(0).click();
});


