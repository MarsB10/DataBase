'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  user: {
      type: String,
  },
  password: {
      type: String,
  }
});

module.exports = mongoose.model('Users', UserSchema);