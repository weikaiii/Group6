var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Mr. Hassan, this is build engineering environment.The tools that can be use are git,bracket as editor');
});

app.listen(process.env.PORT || 3000);
