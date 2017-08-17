var express = require('express');
//var cargo = require('cargo-validator');

var app = express();

app.use(express.static('./public'));



app.get('/', function(req, res){
    res.sendFile('/cargo.html', {root: './public'})
})

app.post(`/validate-cargo`, function(req, res){
    $("#validate").click(function() {
    if (totalPriceCount > 200 && totalWeightCount > 200) {
      $("#validateP").text("Oops! Your have gone over your total weight limit of 200 lbs and price limit of $200. Please make changes accordingly.")
    } else if (totalWeightCount > 200) {
      $("#validateP").text("Oops! Your have gone over your total weight limit of 200 lbs. Please make changes accordingly.")
    } else if(totalPriceCount > 200) {
      $("#validateP").text("Oops! Your have gone over your total price limit of $200. Please make changes accordingly.")
    } else {
      $("#validateP").text('');
      res.send("Cargo Validated!");
    }
})
    
    //send stuff from server back to client

app.listen(8000);