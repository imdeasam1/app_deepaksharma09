var express = require('express');
var router = express.Router();

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

/* GET Users page. */
router.get('/', function(req, res, next) {
  res.render("users", { title: "Classic Rock Listeners", env: process.env });
});

module.exports = router;
