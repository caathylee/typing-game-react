var path = require('path');
var express = require('express');

var app = express();
var port = 8080;

var router = express.Router();

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/players");

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/'));

app.get('*', (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(port, () => {
  console.log("Server listening on port " + port);
});

var userSchema = new mongoose.Schema({
	username: String,
	WPM: Number,
	date: {
		type: Date,
		default: Date.now
	}
});

var User = mongoose.model("User", userSchema);

app.post("/addname", (req, res) => {
	console.log("hello");
  	var myData = new User(req.body);
  	myData.save()
    	.then(item => {
      	res.send("item saved to database");
    	})
    	.catch(err => {
      		res.status(400).send("unable to save to database");
    	});
 
});