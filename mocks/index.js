var express = require('express');
var app = express();
var config = require('./config');
var routes = require('./routes');

app.use(express.bodyParser());
routes(app);

app.listen(config.port);
