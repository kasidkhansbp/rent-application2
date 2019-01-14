PostModel = require('../models').Post;
module.exports = {
	index(req,res) {
		//TODO-put in search criteria
			PostModel.find({},{},{sort:{timestamp:-1}},(err,posts)=> {
				res.render('postlist.handlebars',posts);
			})
		}
	}
