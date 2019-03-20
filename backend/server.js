const express = require('express');
config = require('./server/configure');
mongoose = require('mongoose');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 3001);
//What is this view is for?
//app.set('views','${}/views');
app.set('views', path.join(__dirname, 'views'));
config(app);

mongoose.connect('mongodb://localhost/rent-application2');
mongoose.connection.on('open',()=>{
	console.log('mongoose connected.')
});
const server = app.listen(app.get('port'), () => {
	console.log(`server up: http://localhost:${app.get('port')}`);
});
