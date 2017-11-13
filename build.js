var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Mr. Hassan, this is build engineering environment');
});

app.listen(process.env.PORT || 3000);
