var express = require('express')
		, app = express()
		, path = require('path');

// public folder to serve public assets
app.use( express.static( __dirname + '/public' ));

// send our index.html file to the user for the home page
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

// start the server
var port = process.env.PORT || 8000;

app.listen( port );
console.log('8000 is the magic port!');