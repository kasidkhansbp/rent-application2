PostModel = require('../models').Post;
var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
module.exports = {
  sendemail: function(replyData) {
    console.log('inside email service 1')
    console.log('post id' + replyData.id);
    var id = replyData.id;
    var msg = replyData.msg;
    // get the email from post id
    PostModel.findOne({
      _id: id
    }).exec().then(function(post) {
      //get the email address from post
      console.log('inside post-email extraction 2')
      receiver = post.email;
      console.log('post email 3' + post.email)
      console.log('post email receiver 4' + receiver)
    }).then(function() {
      //send email
      console.log('inside sending email section 5')
      console.log('receiver 6' + receiver);
      var fromEmail = new helper.Email('no-reply@renthub.in');
      var toEmail = new helper.Email(receiver);
      var subject = 'Email from Renthub.in';
      var content = new helper.Content('text/plain', msg);
      var mail = new helper.Mail(fromEmail, subject, toEmail, content);
      var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
      });

      sg.API(request, function(error, response) {
        if (error) {
          console.log('Error response received');
        }
        console.log(response.statusCode);
        console.log(response.body);
        console.log(response.headers);
      });
      console.log('send email')
    }).then(undefined, function(err) {
      if (err) {
        console.log('error: ' + err)
        process.exit(1)
      }
    })
  }
}
