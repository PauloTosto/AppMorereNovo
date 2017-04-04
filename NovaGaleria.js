jQuery(document).ready(function () {

    $('#nav li a').bind('click', function () {

        $('#rowCarousel').hide();
        $('#rowCarousel').children().remove();
      
        var ind = 0;
        var titulo = $(this).attr('id');
        var wtam = MyNames.length;
        for (var w = 0; w < wtam; w++) {
            var item = MyNames[w].Titulo;
            if (item != titulo) {
                continue;
            }
            ind = w;
            w = wtam;
        }

        var totquadros  = MyNames[ind].Quadros.length;
        
        var numCarousel = 0;
        //var interval_Carousel = 0;

        for (var t = 0; t < totquadros;t++ )
        {
            var quadro = MyNames[ind].Quadros[t];

            var interval_Carousel = quadro.intervalo;
            var demora = quadro.delay;
            numCarousel = (t + 1);
            var colunaCarousel = '<div class="col-xs-4 col-md-3 col-sm-4" id="meu' + numCarousel + '">' +
                ' <div id="myCarousel' + numCarousel + '" class="carousel slide carousel-fade active"   data-ride="carousel" data-pause="false" dir="next" data-interval="' + interval_Carousel + '">' +
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
                z = 0;
                
                if (y == 0) {

                   // $('#meu' + num_meu + ' .carousel-indicators').append('<li data-target="#myCarousel' + num_meu + '" data-slide="' + z + '" class="active"></li>');
                    $('#meu' + num_meu + ' .carousel-inner').append('<div class="item active"><img src="' + imgDir + '" alt="1" class="img-responsive" /></div>');

                }
                else {
                   // $('#meu' + num_meu + ' .carousel-indicators').append('<li data-target="#myCarousel' + num_meu + '" data-slide="' + z + '"></li>');
                    $('#meu' + num_meu + ' .carousel-inner').append('<div class="item"><img src="' + imgDir + '" alt="' + z + '" class="img-responsive" /></div>');
                }
            }

            if ( (demora <= 0) || (demora == undefined) || (demora == null))
            {
                $('#myCarousel' + num_meu).carousel({
                    cycle: true, pause: false

                });
                $('myCarousel' + num_meu).on()
            }
            else
            {
                var parametro = '#myCarousel' + num_meu;
                $(parametro).carousel('pause');
                $(parametro).hide();
                setTimeout(function (parametro) {
                    $(parametro).show();
                    $(parametro).carousel({
                        cycle: true, pause: false
                    });
                }, demora, parametro
                );
            }

            
        }
        
        
        

        //numCarousel = numCarousel + 1;
        
        //for (var num_meu = 1; num_meu < numCarousel; num_meu++) {

        //    //exemplo de uso de evento
        //    //if (num_meu == 2) {
        //    //    $('#myCarousel' + num_meu).on('slide.bs.carousel', function (e) {
        //    //        $ativada = $(this).hasClass('active');
        //    //        if ($ativada == true) {
        //    //            $(this).removeClass('active');
        //    //            var parametro = '#'+$(this).attr('id');
        //    //            $(parametro).carousel('pause');
        //    //            setTimeout(function (parametro) {

        //    //                $(parametro).carousel({
        //    //                     pause: false
        //    //                });
        //    //            }, 1000, parametro
        //    //            );
        //    //        }
        //    //    });

        //    //}
            
        //    if (num_meu == 4) {
        //        var parametro = '#myCarousel' + num_meu;
        //        $(parametro).carousel('pause');
        //        setTimeout(function (parametro) {

        //            $(parametro).carousel({
        //                cycle: true, pause: false
        //            });
        //        }, 1000, parametro
        //        );
        //    }

        //    if (num_meu == 3) {
        //        var parametro = '#myCarousel' + num_meu;
        //        $(parametro).carousel('pause');
        //        setTimeout(function (parametro) {

        //            $(parametro).carousel({
        //                cycle: true, pause: false
        //            });
        //        }, 2000, parametro
        //        );
        //    }

        //    if (num_meu == 1) {
        //        var parametro = '#myCarousel' + num_meu;
        //        $(parametro).carousel('pause');
        //        setTimeout(function (parametro) {

        //            $(parametro).carousel({
        //                cycle: true, pause: false
        //            });
        //        }, 3000, parametro
        //        );
        //    }
        //    if (num_meu == 2) {
        //        $('#myCarousel' + num_meu).carousel({
        //            cycle: true, pause: false
        //        });
        //    };
            

            
        //    // $('#meu' + num_meu).show();

        //}

        $('.row').show();
        $('.carousel-indicators').hide();
        $('.carousel-control').hide();
     
    });
    $('#nav li a').eq(0).click();
});

