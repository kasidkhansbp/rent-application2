PostModel = require('../models').Post;
module.exports = {
	index(req,res) {
		//TODO-put in search criteria
		console.log('inside search index')
			PostModel.find({},{},{sort:{timestamp:-1}},(err,posts)=> {
				console.log(posts)
				res.render('postlist.handlebars',posts);
			})
		}
	}
