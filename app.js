var express = require('express');
var app = express();
var port = 5000;

//images, css, libs
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(port, function(err){

});