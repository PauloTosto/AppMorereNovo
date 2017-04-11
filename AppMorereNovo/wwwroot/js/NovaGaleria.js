jQuery(document).ready(function () {

    $('#nav li a').bind('click', function () {

        $('#rowcarousel').hide();
        $('#rowcarousel').children().remove();

        var ind = 0;
        var titulo = $(this).attr('id');
        var wtam = MyNames.length;
        for (var w = 0; w < wtam; w++) {
            var item = MyNames[w].Titulo;
            if (item !== titulo) {
                continue;
            }
            ind = w;
            w = wtam;
        }

        var totquadros = MyNames[ind].Quadros.length;

        var numCarousel = 0;
        //var interval_Carousel = 0;

        var colunas = MyNames[ind].colunas_linha;
        var behavior = MyNames[ind].behavior;
        // checkSize(colunas);
        var tipoclass = "col-xs-6 col-md-6 col-sm-6";
        if (colunas === 3) {
            tipoclass = "col-xs-4 col-md-4 col-sm-4";
        }
        if (colunas === 4) {
            tipoclass = "col-xs-3 col-md-3 col-sm-3";
        }

        //
        for (var t = 0; t < totquadros; t++) {
            var quadro = MyNames[ind].Quadros[t];

            var interval_Carousel = quadro.intervalo;
            var demora = quadro.delay;
            numCarousel = (t + 1);
            var colunaCarousel = '<div class=' + tipoclass + '+ id="meu' + numCarousel + '" style="margin:0 auto;padding: 5px 5px 0 0;" >' +
                ' <div id="myCarousel' + numCarousel + '" class="carousel slide carousel-fade" data-delay="' + demora + '"  data-ride="" data-pause="false" dir="next" data-interval="' + interval_Carousel + '">' +
                '<ol class="carousel-indicators"    ></ol>' +
                '<div class="carousel-inner" role="listbox"     >' +
                '</div>' +
                '<a class="left carousel-control" href="#myCarousel' + numCarousel + '" role="button" data-slide="prev">' +
                '<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>' +
                '<span class="sr-only">Prev</span></a>' +
                '<a class="right carousel-control" href="#myCarousel' + numCarousel + '" role="button" data-slide="next">' +
                '<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>' +
                '<span class="sr-only">Next</span></a>' +
                '</div>' +
                '</div>';
            $('#rowcarousel').append(colunaCarousel).hide();





            var num_meu = numCarousel;
            var z = 0;
            var i = 0;
            tam = quadro.Fotos.length;

            for (var y = 0; y < tam; y++) {
                var imgDir = MyNames[ind].Caminho + quadro.Fotos[y];
                if (y === 0) {

                    // $('#meu' + num_meu + ' .carousel-indicators').append('<li data-target="#myCarousel' + num_meu + '" data-slide="' + z + '" class="active"></li>');
                    $('#meu' + num_meu + ' .carousel-inner').append('<div class="item active"  ><img src="' + imgDir + '" alt="' + y + '" class="img-responsive" style="border-radius:7px"  /></div>');

                }
                else {
                    // $('#meu' + num_meu + ' .carousel-indicators').append('<li data-target="#myCarousel' + num_meu + '" data-slide="' + z + '"></li>');
                    $('#meu' + num_meu + ' .carousel-inner').append('<div class="item"    ><img src="' + imgDir + '" alt="' + y + '" class="img-responsive"  style="border-radius:7px"   /></div>');
                }
            }
        }
        $('.row').show();
        $('.carousel-indicators').hide();
        $('.carousel-control').hide();
        $('#rowcarousel').coordcarousel({ behavior: behavior });
    });
    $('#nav li a').eq(0).click();
    //$(this.windows).resize(checkSize);

});

