module.exports = {
  userInfo: function(req) {
    var myUserEntity = JSON.parse(req.body.myUserEntity);
    return myUserEntity;
  }
}
