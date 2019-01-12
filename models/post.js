const mongoose = require('mongoose'),
      schema = mongoose.Schema,
      path = require('path');

// declare a Schema
var Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {type: String,required:true},
    description: {type: String,required:true},
    address: {type: String,required:true},
    pincode: {type: String,required:true},
    timestamp: {type:Date,'default':Date.now},
    email: {type: String,required:true},
    replies: [{
      type: Schema.Types.ObjectId,
      ref: 'Reply'
    }]
});

module.exports = mongoose.model('Post',PostSchema);
