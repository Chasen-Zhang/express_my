let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('index', { title: '首页' });
});
router.get('/test', function(req, res, next) {
    res.json({
        msg:"hahah"
    })
});
module.exports = router;
