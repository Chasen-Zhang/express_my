let express = require('express');
let router = express.Router();
let util = require('../util/util');
let userModel = require('../model/model');

/**  加密*/
var crypto = require('crypto');
/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('login', { title: '登录' });
});


router.post('/', function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let md5 = crypto.createHash("sha256");
    let newPas = md5.update(password).digest("hex");
    let obj ={
        username:username,
        password:newPas
    };
    userModel.find({},(err,data)=>{
        if(!err){
            let user = util.isReg(obj,data);
            if(user){
                /*  util.users.push(obj);*/
                if(user.password === newPas){
                    res.redirect('/chart');
                }else {
                    res.json({
                       code:400,
                       msg:"密码或账号错误"
                    });
                }
            }else{
                /** 重新注册*/
                res.redirect('/reg');
            }
        }else{
            console.log(err);
        }
    });
});

module.exports = router;
