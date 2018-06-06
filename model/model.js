/**
 * @Author: Chasen
 * @Project: express_my
 * @Description: 作用
 * @Date: 2018/6/6 15:22
 */
// 链接数据库
let mongoose = require("mongoose");

//创建schema（模式对象）
let Schema = mongoose.Schema;
let userSchema = new Schema({
    username:String,
    password:String
});

//创建模型Model 对象
let userModel = mongoose.model("user", userSchema);
module.exports = userModel;