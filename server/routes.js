const express = require('express'),
	router = express.Router(),
	home=require('../controllers/home'),
	login=require('../controllers/login'),
	post=require('../controllers/post'),
	search=require('../controllers/search');

module.exports = (app)=> {
	router.get('/',home.index);
	router.get('/search',search.index);
	router.post('/login',login.index);
	router.post('/post',post.create);
	router.get('/post/edit/:id',post.edit);
	router.get('/post/delete/:id',post.delete);
	router.post('/post/reply/',post.reply);
	//Test purpose
	router.get('/accounts',login.getAccount);
	app.use(router);
};
