var express = require('express');


var app = express();

// app.use(require('body-parser').urlencoded({extended:true}));
// require('./auth/init')(app); // uncomment for login (mongodb dependency)


// set the view engine to ejs
app.set('view engine', 'ejs');

app.set('views', __dirname + '/../views');

//set our port
app.set('port', 3000);

app.configure(function() {
	app.use(express.json());
	app.use(express.urlencoded());
});
// serve up our public directory
app.use(express.static(__dirname + '/../public'));


// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});


require('http').createServer(app).listen(app.get('port'), function(){
  console.log("Mal server listening on port " + app.get('port'));
});

process.on('uncaughtException', function (err) {
    console.log(err);
});


exports.app = app;

