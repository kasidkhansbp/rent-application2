module.exports = {
	index(req,res) {
		res.send('The post: index controller');
	},
	create(req,res) {
		res.send('The post: create controller');
	},
	edit(req,res) {
		res.send('The post: edit controller');
	},
	delete(req,res) {
		res.send('The post: delete controller');
	},
	reply(req,res) {
		res.send('The post: reply controller');
	},
}