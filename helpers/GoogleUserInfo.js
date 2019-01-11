module.exports = {
  payload: function(req) {
    //
    console.log("entered Google Info User")

    token = req.body.idtoken;
    var payloadInfo;
    console.log('print token variable' + token)
    console.log('Before verify token loop')
    async function verify() {
      console.log('entered verify token loop')
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: '452772637773-61ablseaj861narh01j83f875ifdv7qo.apps.googleusercontent.com', // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      payloadInfo = ticket.getPayload();
      console.log(payloadInfo)
      //userid = payload['sub'];
      //email = payload['email'];
      //console.log(userid);
      //console.log(email);
    }
    verify().catch(console.error);
    console.log('printing payload info')
    console.log(payloadInfo)
    return payloadInfo;
  }
}
