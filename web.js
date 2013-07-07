var express = require('express');

var app = express.createServer(express.logger());

var read_file = function (file_name) {
    var fs = require ('fs');
    var rs = '';
    fs.readFileSync (file_name, function (err, data) {
	if (err) throw err;
	rs = data;
    });
    return ts.toString ();
}

app.get('/', function(request, response) {
    var html = read_file ('index.html');
    response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
