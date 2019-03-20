PostModel = require('../models').Post;
module.exports = {
	index(req,res) {
	console.log('backend', req.query.searchText)
	//TODO-put in search criteria
		PostModel.find({},{},{sort:{timestamp:-1}},(err, posts)=> {
			return res.json({posts, success: true});			
		})
	}
}
