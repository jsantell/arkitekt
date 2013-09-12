var express = require('express');
var app = express();
var config = require('./config');
var routes = require('./routes');

routes(app);

app.listen(config.port);
