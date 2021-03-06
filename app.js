var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var app 		= express();
var login       = require('./controllers/login');
var admin       = require('./controllers/admin');

var exvalidator = require('express-validator');
var ejs = require('ejs');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.listen(25565, function(){
    console.log('express http server started at...25565');
    
});

app.get('/', function(req, res){
    res.redirect('/login');
});
app.use('/login',login);
app.use('/admin',admin);

