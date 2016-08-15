//Javascript bits of an etch-a-sketch thing, based on the Odin Project's jQuery project.
//Relies, as you might expect, on jQuery

$(document).ready(function() {
    for(var i=0; i<16; i++){
        var row = $('<div class="row" id="row' + i + '"></div>');
        $('.grid-wrapper').append(row);
        for(var j = 0; j<16; j++){
            var square = $('<div class="square" id="sq' + (i*16+j) + '">' + (i*16+j) + '</div>');
            $('#row'+i).append(square);
        }
    }

    $('.square').on('mouseenter', function() {
        $(this).addClass('highlight');
    });

    $('.square').on('mouseleave', function() {
        $(this).removeClass('highlight');
    });
});
