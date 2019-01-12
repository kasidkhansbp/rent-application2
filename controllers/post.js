PostModel = require('../models').Post;
AccountModel = require('../models').Account;
module.exports = {
  create(req, res) {
    console.log('Entered post create')
    //res.send('The post: create controller');
    console.log('req session' + req.session.email)
    if (!req.session.email) {
      console.log('inside req session validation')
      res.redirect('/');
    }
    let post = new PostModel({
      title: req.body.title,
      description: req.body.description,
      address: req.body.address,
      pincode: req.body.pincode,
      timestamp: Date.now(),
      email: req.session.email,
      replies: []
    })
    //saves the post
    post.save().then(function(doc) {
      console.log('inside post save' + doc._id)
      console.log('email' + req.session.email)
      // IS there a better way write this query to catch error
      AccountModel.findOneAndUpdate({
        email: req.session.email
      }, {
        $push: {
          posts: doc._id
        }
      }, {
        new: true
      }).then(() => doc);
      res.render('index.handlebars')
    })
  },
  edit(req, res) {
    //find the post by ID
    PostModel.findById(req.params.id, (error, post) => {
      if (error) {
        console.log('error: ' + error)
        process.exit(1)
      }
      // check if the post exist.
      if (post == null) return res.status(404).send("post not found")
      // update the change
      post.title = req.body.title,
        post.description = req.body.description,
        post.address = req.body.address,
        post.pincode = req.body.pincode,
        post.timestamp = Date.now(),
        post.email = req.session.email

      //save the function
      post.save((error) => {
        if (error) {
          console.log('error: ' + error)
          process.exit(1)
        }
        res.status(200).send('Updated successfully')
      })
    })

  },
  delete(req, res) {
    //find the post by ID
    PostModel.findById(req.params.id, (error, post) => {
      if (error) {
        console.log('error: ' + error)
        process.exit(1)
      }
      // check if the post exist.
      if (post == null) return res.status(404).send("post not found")
      // Delete the post
      post.remove((error) => {
        if (error) {
          console.log('error: ' + error)
          process.exit(1)
        }
        res.status(204).send()
      })
    })
  },
  reply(req, res) {
    //res.send('The post: reply controller');
    // I need post id
  },
}
