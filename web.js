var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Mr. Hassan, we are from group 6 <br><br>Our group member are: <br> 3. Kho Kheng Eian');
});

app.listen(process.env.PORT || 3000);
