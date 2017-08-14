var express = require('express');
var cargo = require('cargo-validator');

var app = express();

app.use(express.static('./public'));



app.get('./cargo-validator', function(req, res){
    res.sendFile('./cargo.html', {root: './public'})
})

app.post(`/validate-cargo`, function(req, res){
        if (($('#total-weight') <== 200) && ($('#total-cost') <== 200)) {
            console.log('Valid Weight and Cost!');
        } else if (($('#total-weight') <== 200) && ($('#total-cost') >== 200)) {
            console.log('Careful: Valid Weight but NOT a Valid Cost!');
        } else if (($('#total-weight') >== 200) && ($('#total-cost') <== 200)) {
            console.log('Careful: Valid Cost but NOT a Valid Weight!');
        } else if (($('#total-weight') >== 200) && ($('#total-cost') >== 200)) {
            console.log('Careful: Neither a Valid Weight NOR a Valid Cost!');
        }
    res.send("Cargo Validated!");
})