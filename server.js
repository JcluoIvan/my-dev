
const fs = require('fs');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.end(fs.readFileSync('./www/index.html'));
});
app.get('*', function(req, res) {

    res.end(fs.readFileSync('./www' + req.url));

});


const server = app.listen(8000, function() {
    console.log('run');
});