jQuery(document).ready(function () {


    $('#nav li a').bind('click', function () {

        $('#meu1').hide();
        $('#meu2').hide();
        $('#meu3').hide();
        $('#meu4').hide();

        $('#meu1 .carousel-indicators li').remove();
        $('#meu1 .carousel-inner div').remove();

        $('#meu2 .carousel-indicators li').remove();
        $('#meu2 .carousel-inner div').remove();
        $('#meu3 .carousel-indicators li').remove();
        $('#meu3 .carousel-inner div').remove();
        $('#meu4 .carousel-indicators li').remove();
        $('#meu4 .carousel-inner div').remove();



        var chave = $(this).attr('rel');

        var MyNames = JSON.parse('@Html.Raw(Newtonsoft.Json.JsonConvert.SerializeObject(modelo))');

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
                $('#meu' + num_meu + ' .carousel-indicators').append('<li data-target="#myCarousel' + num_meu + '" data-slide-to="' + z + '" ></li>');
                $('#meu' + num_meu + ' .carousel-inner').append('<div class="item"><img src="' + imgDir + '" alt="' + z + '" class="img-responsive" /></div>');
            }
            z = z + 1;

        }
        for (var num_meu = 1; num_meu < 5; num_meu++) {
            //var children = $('#meu' + num_meu + ' .carousel-indicators li');
            // if (children != undefined)
            //     children.eq(0).addClass('active');
            // var children2 = $('#meu' + num_meu + ' .carousel-inner div');
            // if (children2 != undefined) {
            //     children2.eq(0).removeClass('item');
            //     children2.eq(0).addClass('item active');
            $('#meu' + num_meu).show();
        }

    });
      $('#nav li a').eq(0).click();
});

