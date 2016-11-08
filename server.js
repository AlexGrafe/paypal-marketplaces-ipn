var express = require('express');
var app = express();



app.get('/', function (req, res) {
   res.send('Hello World');
});


app.post('*', function (req, res) {
   console.log("Got a POST request for the homepage", req);
   res.send(JSON.stringify(req));
})







var server = app.listen(process.env.PORT || 8080, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at ", host, port)
});
