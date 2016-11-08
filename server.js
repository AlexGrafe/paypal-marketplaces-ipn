var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/', function (req, res) {
   res.send('Hello World');
});


app.post('*', function (req, res) {
   console.log("Got a POST request for the homepage", req);
   res.send(JSON.stringify
       (
           {
               "protocol":      req.protocol,
               "hostname":      req.hostname,
               "originalUrl":   req.originalUrl,
               "path":          req.path,
               "query":         req.query,
               "headers":       req.headers,
               "body":          req.body
           }
       ));
})







var server = app.listen(process.env.PORT || 8080, function () {
   console.log("Example app listening at ", server.address().address, server.address().port)
});
