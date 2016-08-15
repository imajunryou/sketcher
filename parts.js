//Javascript bits of an etch-a-sketch thing, based on the Odin Project's jQuery project.
//Relies, as you might expect, on jQuery

function clearGrid() {
    $('.row').remove();
}

function generateGrid(squares) {
    for(var i=0; i<squares; i++){
        var row = $('<div class="row" id="row' + i + '"></div>');
        $('.grid-wrapper').append(row);
        for(var j = 0; j<squares; j++){
            var square = $('<div class="square" id="sq' + (i*squares+j) + '"></div>');
            $('#row'+i).append(square);
        }
    }
}

$(document).ready(function() {
    clearGrid();
    generateGrid(16);

    $('#clear-grid-btn').on('click', function() {
        clearGrid();
        generateGrid(16);
    });
    
    $('.square').on('mouseenter', function() {
        console.log(this.id);
        $(this).addClass('highlight');
    });

    $('.square').on('click', function() {
        console.log("CLICK! " + this.id);
    });
});
