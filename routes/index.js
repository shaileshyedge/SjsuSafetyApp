var express = require('express');
var router = express.Router();
//API KEY : AIzaSyBhIVOxYl0BTYZeginLOrFuNtrEKAH95pY

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
