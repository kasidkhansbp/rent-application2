PostModel = require('../models').Post;
module.exports = {
	index(req,res) {
		//res.send('The home: index controller');
		res.render('index.handlebars')
		}
	}
