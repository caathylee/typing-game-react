var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(__dirname + '/'));

app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(process.env.PORT || 8080);