// Importing Modules
var express = require('express');
const bodyParser = require('body-parser')
const Cors = require("cors");
var fs = require('fs');
var favicon = require('serve-favicon');

// Creating server and setting port, resource path
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname));
app.use(Cors());
app.use(favicon(__dirname + '/assets/img/favicon.ico'));

// Defining routes
app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname});
})

// Starting server
app.listen(port, async () => {
    try {
        console.log(`listening on ${port}`);
    }
    catch(e) {
        console.error(e)
    }
});