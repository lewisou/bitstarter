var express = require('express');

var app = express.createServer(express.logger());

var read_file = function (file_name) {
    var fs = require ('fs');
    var rs = fs.readFileSync (file_name, 'utf-8');
    return rs.toString ('utf-8');
}

app.get('/', function(request, response) {
    var html = read_file ('index.html');
    response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
