var fs = require("fs");
var express = require('express');

var app = express.createServer(express.logger());
app.use(express.static(__dirname + '/images'));

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html', 'utf8');   
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
