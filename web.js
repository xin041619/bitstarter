var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response_buffer = fs.readFileSync("./index.html");
  response.send(response_buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
