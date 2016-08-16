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
            var row = $('<div class="row" id="row' + i + '"></div>');
            $(this).closest('.interactives').find('.grid-wrapper').append(row);
            for (var j = 0; j < squares; j++){
                var square = $('<div class="square" id="sq' + (i*squares+j) + '"></div>');
                $(this).closest('.interactives').find('#row'+i).append(square);
            }
        }

        var sizes = [960];
        var square_size = Math.floor((sizes[0]/squares));
        var grid_size = sizes[0];
        $('.square').css({"width": square_size+"px",
                         "height": square_size+"px"});
        $('.grid-wrapper').css({"width": grid_size+"px",
                                "height": grid_size+"px"});

        $('.square').on('mouseenter', function() {
            $(this).addClass('highlight');
        });

        $('.square').on('click', function() {
            console.log("CLICK! " + this.id);
        });
    });
    

});
