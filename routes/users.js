var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/newform');

var userschema = mongoose.Schema({

  name : String,
  email : String
});

module.exports = mongoose.model('user', userschema);