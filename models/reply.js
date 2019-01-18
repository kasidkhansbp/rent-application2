const mongoose = require('mongoose');

// declare a Schema
var Schema = mongoose.Schema

const ReplySchema = new Schema({
  message: {type: String,required:true},
  name: {type: String,required:true},
  email:{type: String,required:true},
  timestamp: {type:Date,'default':Date.now},
  post_id: {type: Schema.Types.ObjectId,ref: 'Post'}
});

module.exports = mongoose.model('Reply',ReplySchema);
