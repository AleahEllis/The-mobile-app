var express = require('express'); //web app framework use to create a rest API
var app = express();

var menu =require('./beerList.js');//this says, that menu contains the array with the beer
	
app.get('/api/beerPair', function (request, respond) { //requesting and responding with the menu contents
	respond.send(menu);
});

var server = app.listen(3000, function () { 
	var host = server.address().address;//configures the server - the ip address
	var port = server.address().port;
	// console.log('Example app listening at http://%s:%s', host, port);
 });

app.use(express.static(__dirname + '/public'));