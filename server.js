var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];
console.log(config);

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

app.listen(config.port);
console.log('Server stated at: '+ config.port+'.....');
