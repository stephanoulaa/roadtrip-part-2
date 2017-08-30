var express = require('express');
//var cargo = require('cargo-validator');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('./public'));
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.sendFile('/boston.html', {root: './public'})
})

app.get('/nyc', function(req, res){
    res.sendFile('/nyc.html', {root: './public'})
})

app.get('/chicago', function(req, res){
    res.sendFile('/chicago.html', {root: './public'})
})

app.get('/boulder', function(req, res){
    res.sendFile('/boulder.html', {root: './public'})
})

app.get('/sanfran', function(req, res){
    res.sendFile('/sanfran.html', {root: './public'})
})

app.post(`/validate-cargo`, function(req, res){
    console.log('body: ', req.body)
    //price and weight: form key names in main.js when sending it to server
    console.log('prices: ' , req.body.price)
    console.log('weights: ', req.body.weight)
    //same logic as in main.js
    if (req.body.price > 200 && req.body.weight > 200) {
      res.send("Oops! Your have gone over your total weight limit of 200 lbs and price limit of $200. Please make changes accordingly.")
    } else if (req.body.weight > 200) {
      res.send("Oops! Your have gone over your total weight limit of 200 lbs. Please make changes accordingly.")
    } else if(req.body.price > 200) {
      res.send("Oops! Your have gone over your total price limit of $200. Please make changes accordingly.")
    } else {
      res.send("Cargo Validated!");
    }
})
    
    //send stuff from server back to client

app.listen(8080, function(){
    console.log('Server started on 8080')
});