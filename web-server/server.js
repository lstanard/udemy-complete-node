var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');

// app.use(middleware.requireAuthentication);

// Application-level middleware
app.use(middleware.logger);

// Route-level middleware
app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('Express server started on port ' + PORT + '.');
});