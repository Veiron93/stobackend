const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();


let cars = [
	{
		id: "1",
		model: "X5"
	},
	{
		id: "2",
		model: "Land Cruiser"
	},
	{
		id: "3",
		model: "Legacy B4"
	}
];

app.get('/', function(rew, res){
	res.send('Hello World')
});

app.get('/car', function(rew, res){
	res.send('test page')
});

app.listen(4000, () => {
  console.log('Server started');
});









