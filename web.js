var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var str = fs.readFileSync("index.html").toString();
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
