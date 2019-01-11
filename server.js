const express = require('express');
config = require('./server/configure');
mongoose = require('mongoose');
const path = require('path');
let app=express();

app.set('port',process.env.PORT || 3000);
//What is this view is for?
//app.set('views','${}/views');
app.set('views', path.join(__dirname, 'views'));
app = config(app);

mongoose.connect('mongodb://localhost/rent-application2');
mongoose.connection.on('open',()=>{
	console.log('mongoose connected.')
});
const server = app.listen(app.get('port'),()=>{
	console.log(`server up: http://localhost:${app.get('port')}`);
});
