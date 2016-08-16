//Javascript bits of an etch-a-sketch thing, based on the Odin Project's jQuery project.
//Relies, as you might expect, on jQuery

$(document).ready(function() {

    $('.new_grid').on('click', function() {
        var squares = +prompt("What is the side-length of your grid?", "16");
        if (isNaN(squares)) {
            squares = 16;
        }

        $(this).closest('.interactives').find('.grid-wrapper').empty();

        for (var i = 0; i < squares; i++){
            for (var j = 0; j < squares; j++){
                var square = $('<div class="square" id="sq' + (i*squares+j) + '"></div>');
                $(this).closest('.interactives').find('.grid-wrapper').append(square);
            }
        }

        $('.square').css({"width": Math.floor((100/squares)*0.8)+"vmin",
                         "height": Math.floor((100/squares)*0.8)+"vmin"});

        $('.square').on('mouseenter', function() {
            $(this).addClass('highlight');
        });

        $('.square').on('click', function() {
            console.log("CLICK! " + this.id);
        });
    });
    

});
