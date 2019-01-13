AccountModel = require('../models').Account;
var GoogleUserInfo = require('../helpers/GoogleUserInfo');
module.exports = {

  index(req, res) {
    const myUserEntity = GoogleUserInfo.userInfo(req);
    var email = myUserEntity.email;
    AccountModel.find({
      email: email
    }, (error, account) => {
      if (error) {
        console.log('error: ' + error)
        process.exit(1)
      }
      console.log(account);
      if (!account.length) {
        console.log('entered account creation')
        account = new AccountModel({
          email: myUserEntity.email,
          name: myUserEntity.name,
          timestamp: Date.now(),
          posts: [],
          replies: []
        })
        //set session with name and email
        req.session.email = myUserEntity.email;
        req.session.name = myUserEntity.name;
        account.save((error) => {
          if (error) {
            console.log('error: ' + error)
            process.exit(1)
          }
          res.render('index')
        })
      } else {
        //set session with name and email
        console.log('existing account session setter')
        req.session.email = myUserEntity.email;
        req.session.name = myUserEntity.name;
        res.render('index.handlebars')
      }
    })
  },
  //Test purpose
  getAccount(req, res) {
    if (req.session.email == 'kasidkhan@gmail.com') {
      AccountModel.find({}, {}, {
        sort: {
          timestamp: -1
        }
      }, (err, accounts) => {
        res.send(accounts);
      })
    } else {
      res.render('notfound')
    }
  }
}
