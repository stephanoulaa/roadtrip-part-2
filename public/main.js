var items = [
    {
        item: 'water bottles',
        weight: 1,
        cost: 1.5,
    },
    {
        item: 'car tires',
        weight: 22,
        cost: 80,
    },
    {
        item: 'shoes',
        weight: 2.5,
        cost: 35,
    },
    {
        item: 'snacks',
        weight: 0.33,
        cost: 3,
    }
]
$(document).ready(function(){
    
    //need to append total wieght and total cost w/jquery WHEN item is added/removed
    for (var i=0; i<items.length; i++) {
        $('#total-weight').on('click', function() {
            $('#total-weight').append('<div>' + items[i].weight + '</div>');
        });
        $('#total-cost').on('click', function() {
            $('#total-cost').append('<div>' + items[i].cost + '</div>');
        });
    } //end of for loop
    
    
    //stuff to #the-button at end of page
    $('#the-button').on('click', function(){
        if (($('#total-weight') <== 200) && ($('#total-cost') <== 200)) {
            $.post(`/validate-cargo`, function(data) {
                $('#the-button').html(data);
            });
            $('#the-button').css("border", "green");
            console.log('Valid Weight and Cost!');
        } else if (($('#total-weight') <== 200) && ($('#total-cost') >== 200)) {
            $('#the-button').css("border", "orange");
            console.log('Careful: Valid Weight but NOT a Valid Cost!');
        } else if (($('#total-weight') >== 200) && ($('#total-cost') <== 200)) {
            $('#the-button').css("border", "orange");
            console.log('Careful: Valid Cost but NOT a Valid Weight!');
        } else if (($('#total-weight') >== 200) && ($('#total-cost') >== 200)) {
            $('#the-button').css("border", "red");
            console.log('Careful: Neither a Valid Weight NOR a Valid Cost!');
        }
    })
    
}); //end of document.ready