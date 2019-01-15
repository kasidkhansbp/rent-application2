PostModel = require('../models').Post;
AccountModel = require('../models').Account;
ReplyModel = require('../models').Reply;
module.exports = {
  create(req, res) {
    //res.send('The post: create controller');
    if (!req.session.email) {
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
    const updatePost = JSON.parse(req.body.updatePost);

    console.log('inside post edit')
    PostModel.findOneAndUpdate({
      _id: updatePost.id
    }, {
      "$set": {
        "title": updatePost.title,
        "description": updatePost.description,
        "pincode": updatePost.pincode,
        "address": updatePost.address
      }
    }).exec(function(err, post) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(post);
      }
    });
  },
  delete(req, res) {
    //find the post by ID
    PostModel.findById(req.params.id, (error, post) => {
      if (error) {
        console.log('error: ' + error)
        process.exit(1)
      }
      // check if the post exist.
      console.log('post for deletion' + post)
      if (post == null) return res.status(404).send("post not found")
      // Delete the post
      post.remove((error) => {
        if (error) {
          console.log('error: ' + error)
          process.exit(1)
        }
        res.redirect('/post/mypost');
      })
    })
  },
  reply(req, res) {
    //res.send('The post: reply controller');
    //res.send('The post: create controller')
    const replyData = JSON.parse(req.body.replyData);
    if (!req.session.email) {
      res.redirect('/');
    }
    // Create a Reply
    let reply = new ReplyModel({
      message: replyData.msg,
      name: req.session.name,
      email: req.session.email,
      timestamp: Date.now(),
      post_id: replyData.id
    })
    // save the Reply
    reply.save().then(function(doc) {
      // IS there a better way write this query to catch error
      // update account
      AccountModel.findOneAndUpdate({
        email: req.session.email
      }, {
        $push: {
          replies: doc._id
        }
      }, {
        new: true
      }).then(() => doc);
      // update post
      PostModel.findOneAndUpdate({
        _id: req.body.replyData.id
      }, {
        $push: {
          replies: doc._id
        }
      }, {
        new: true
      }).then(() => doc);
      res.render('index.handlebars')
    })
  },
  userpost(req, res) {
    console.log('user post controller')
    PostModel.find({
      email: req.session.email
    }, {}, {
      sort: {
        timestamp: -1
      }
    }, (err, posts) => {
      res.render('postlist.handlebars', posts);
    })
  },
}
