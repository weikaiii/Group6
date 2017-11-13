var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Mr. Hasan, we are from group 6 <br><br>Our group member are: <br> 1. Hii Wei Kai \t CB14155<br> 2. Zahra Syhida \t CB15169<br> 3. Kho Kheng Eian \t CB15173<br> 4. Wong Ying Shin \t CB15172 <br> 5. Toh Kok Cheng \t CB15177<br>6. Lim Jing Jie \t CB15170');
});

app.listen(process.env.PORT || 3000);
