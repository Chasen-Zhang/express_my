let express = require('express');
let router = express.Router();
let util = require('../util/util');
let userModel = require('../model/model');

/**  加密*/
var crypto = require('crypto');
/* GET home page. */
router.get('/', function(req, res, next) {
   res.render('register', { title: '注册' });
});


router.post('/', function(req, res, next) {
   let username = req.body.username;
   let password = req.body.password;
   let obj ={
       username:username,
       password:password
   };


    //生成口令的散列值
    let md5 = crypto.createHash('sha256');   //crypto模块功能是加密并生成各种散列,此处所示为MD5方式加密
    let end_paw = md5.update(password).digest('hex');//加密后的密码

    userModel.find({},(err,data)=>{
       if(!err){
           let user = util.isReg(obj,data);
           if(!user){//没有注册
             /*  util.users.push(obj);*/
               userModel.create({
                     username: username,
                     password: end_paw
                 },(err)=>{
                     if(!err){
                         console.log("注册成功!!!!!!");
                     }else{
                         throw err;
                     }
                 });
               /*  res.send("注册成功");*/
               res.redirect('/login');
           }else{
               res.send("当前用户已经注册！");
           }
       }else{
           console.log(err);
       }
    });

   //验证是否存在

});

/**是否注册*/
/*let isReg = (obj)=>{
  for(let i=0;i<users.length;i++){
      let user = users[i];
      if(user.userName ===obj.userName){
         return user;
      }
  }
};*/


module.exports = router;
