var express = require('express');

var app = express();

app.use(express.static('./public'));

//index1.html = Boston
//index2.html = NYC
//index3.html = Chicago
//index4.html = Boulder
//index5.html = SanFran

app.get('/Boston', function(request, response){
    response.sendFile('./index1.html', {root: './public'})
})

app.get('/NYC', function(request, response){
    response.sendFile('./index2.html', {root: './public'})
})

app.get('/Chicago', function(request, response){
    response.sendFile('./index3.html', {root: './public'})
})

app.get('/Boulder', function(request, response){
    response.sendFile('./index4.html', {root: './public'})
})

app.get('/SanFran', function(request, response){
    response.sendFile('./index5.html', {root: './public'})
})


//how to make URL's "pretty" without .html???