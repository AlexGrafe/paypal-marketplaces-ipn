var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var uuid = require('node-uuid');

var firebase = require('firebase');

firebase.initializeApp({
    databaseURL:    'https://project--8640542991709206252.firebaseio.com',
    serviceAccount: './project--8640542991709206252-firebase-adminsdk-mpa6l-cb88474a0a.json'
});


app.get('/', function (req, res) {
   res.send('Hello World');
});


app.post('*', function (req, res) {
    //console.log("Got a POST request for the homepage", req);

    // firebase
    firebase.database().ref('/' + uuid.v4()).set("hello world");

    res.json({
        "protocol":      req.protocol,
        "hostname":      req.hostname,
        "originalUrl":   req.originalUrl,
        "path":          req.path,
        "query":         req.query,
        "headers":       req.headers,
        "body":          req.body
    });
});







var server = app.listen(process.env.PORT || 8080, function () {
   console.log("Example app listening at ", server.address().address, server.address().port)
});
