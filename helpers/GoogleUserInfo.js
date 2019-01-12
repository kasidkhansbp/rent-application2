module.exports = {
  userInfo: function(req) {
    //
    console.log("entered Google Info User")

    var myUserEntity = JSON.parse(req.body.myUserEntity);
    return myUserEntity;
  }
}
