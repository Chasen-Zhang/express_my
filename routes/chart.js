let express = require('express');
let router = express.Router();
let util = require('../util/util');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('chat', { title: '聊天' });
});

module.exports = router;
