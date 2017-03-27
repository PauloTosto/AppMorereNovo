jQuery(document).ready(function () {

    $('#nav li a').bind('click', function () {

        $('#rowCarousel').hide();
        $('#rowCarousel').children().remove();
      
        var ind = 0;
        var path = $(this).attr('id');
        var wtam = MyNames.length;
        for (var w = 0; w < wtam; w++) {
            var item = MyNames[w].Titulo;
            if (item != path) {
                continue;
            }
            ind = w;
            w = wtam;
        }

        var numquadros  = MyNames[ind].Quadros.length;
        
        var numCarousel = 0;
        var interval_Carousel = 0;

        for (var t = 0; t < numquadros;t++ )
        {
            var quadro = MyNames[ind].Quadros[t];

            interval_Carousel = quadro.intervalo;

            numCarousel = (t + 1);
            var colunaCarousel = '<div class="col-md-3" id="meu' + numCarousel + '">' +
                ' <div id="myCarousel' + numCarousel + '" class="carousel slide" data-ride="carousel" data-interval="' + interval_Carousel + '">' +
                '<ol class="carousel-indicators"></ol>' +
                '<div class="carousel-inner" role="listbox">' +
                '</div>' +
                '<a class="left carousel-control" href="#myCarousel' + numCarousel + '" role="button" data-slide="prev">' +
                '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
                '<span class="sr-only">Prev</span></a>' +
                '<a class="right carousel-control" href="#myCarousel' + numCarousel + '" role="button" data-slide="next">' +
                '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
                '<span class="sr-only">Next</span></a>' +
                '</div>' +
                '</div>';
            $('#rowCarousel').append(colunaCarousel).hide();
            
            
            var num_meu = numCarousel;
            var z = 0;
            var i = 0;
            tam = quadro.Fotos.length;
            for (var y = 0; y < tam; y++) {
                var imgDir = MyNames[ind].Caminho + quadro.Fotos[y];

                var activo = "active";

                if (y == 0) {

                    $('#meu' + num_meu + ' .carousel-indicators').append('<li data-target="#myCarousel' + num_meu + '" data-slide-to="' + z + '" class="active"></li>');
                    $('#meu' + num_meu + ' .carousel-inner').append('<div class="item active"><img src="' + imgDir + '" alt="1" class="img-responsive" /></div>');

                }
                else {
                    $('#meu' + num_meu + ' .carousel-indicators').append('<li data-target="#myCarousel' + num_meu + '" data-slide-to="' + z + '"></li>');
                    $('#meu' + num_meu + ' .carousel-inner').append('<div class="item"><img src="' + imgDir + '" alt="' + z + '" class="img-responsive" /></div>');
                }
            }
            
        }
        
        
        

        numCarousel = numCarousel + 1;

        for (var num_meu = 1; num_meu < numCarousel; num_meu++) {

            $('#myCarousel' + num_meu).carousel({
                cycle: true, pause: false
            });

           // $('#meu' + num_meu).show();

        }

        $('.row').show();
        $('.carousel-indicators').hide();
        $('.carousel-control').hide();
        //if (max_numero < 5) {
        //    for (var num_meu = max_numero; num_meu < 5; num_meu++) {
        //        $('#myCarousel' + num_meu).remove();
        //    }
        //}

        //  $("#myid").removeClass("hide");
    });
    $('#nav li a').eq(0).click();
});

