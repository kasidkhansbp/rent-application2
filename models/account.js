const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      path = require('path');

// declare a Schema
var Schema = mongoose.Schema

const AccountSchema = new Schema({
      email: {type: String,required:true},
      name: {type: String,required:true},
      timestamp: {type:Date,'default':Date.now},
      posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }],
      replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Reply'
      }]
});

module.exports = mongoose.model('Account',AccountSchema);
