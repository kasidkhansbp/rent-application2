const express = require('express');
config = require('./server/configure');
let app=express();

app.set('port',process.env.PORT || 3300);
app.set('views','${}/views');

app = config(app);

const server = app.listen(app.get('port'),()=>{
	console.log(`server up: http://localhost:${app.get('port')}`);
});