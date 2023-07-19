


var express = require('express');
var app = express();
var ip = require('ip');

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send("Hellow");
});

app.get('/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/whoami', function(req, res) {
  var ip_address = ip.address();
  var language = req.headers['accept-language'];
  var user_agent = req.headers['user-agent'];

  var parsedData = {
    ipaddress: ip_address,
    language: language,
    software: user_agent
  };

  res.json(parsedData);
});

var listener = app.listen(process.env.PORT || 3002, function() {
  console.log('Rodando na porta ' + listener.address().port);
});
