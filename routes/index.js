var express = require('express');
var router = express.Router();
var usermodel = require('./users');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.post('/reg', function(req, res){
  res.render('index');
  usermodel.create({
    name : req.body.name,
    email : req.body.email
  }).then(function(err){
    res.send(err);
  });
});

router.get('/read', function(req, res){
  usermodel.find()
  .then(function(founddata){
    res.send(founddata);
  });
});

router.get('/read/:username', function(req, res){
  usermodel.findOne({
    name : req.params.username
  }).then(function(foundone){
    res.send(foundone);
    console.log('!')
  });
});

router.get('/update/:update/:updated', function(req, res){
  usermodel.findOneAndUpdate(
    {name : req.params.update},
    {name : req.params.updated}
    ).then(function(updatedata){
    res.send(updatedata);
  });
});

router.get('/delete/:delete', function(req, res){
  res.send('the file hase been deleted');
  usermodel.findOneAndDelete(
    {name : req.params.delete},
    ).then(function(updatedata){
    res.send(updatedata);
  });
});


module.exports = router;
