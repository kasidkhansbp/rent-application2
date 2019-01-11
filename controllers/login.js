AccountModel = require('../models').Account;
var GoogleUserInfo = require('../helpers/GoogleUserInfo');
module.exports = {

  index(req, res) {
    var payload = GoogleUserInfo.payload(req);
    console.log('payload inside index')
    console.log(payload)
    var userid = payload['sub'];
    AccountModel.find({
      google_id: userid
    }, (error, account) => {
      if (error) {
        console.log('error: ' + error)
        process.exit(1)
      }
      console.log(account);
      if (!account.length) {
        console.log('entered account creation')
        account = new AccountModel({
          email: payload['email'],
          name: payload['name'],
          google_id: payload['sub'],
          timestamp: Date.now(),
          posts: [],
          replies: []
        })
        //set session with google_id and email
        req.session.email = payload['email'];
        req.session.google_id = payload['sub'];
        account.save((error) => {
          if (error) {
            console.log('error: ' + error)
            process.exit(1)
          }
          res.render('index')
        })
      } else {
        //set session with google_id and email
        console.log('existing account session setter')
        req.session.email = payload['email'];
        req.session.google_id = payload['sub'];
        res.render('index.handlebars')
      }
    })
  },
  //Test purpose
  getAccount(req, res) {
    AccountModel.find({}, {}, {
      sort: {
        timestamp: -1
      }
    }, (err, posts) => {
      res.send(posts);
    })
  }
}
