/**
 * Created by dllo on 17/8/7.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var handlerError = require('./../public/javascripts/handlerError');

var options = {
    connectionLimit:3,
    host:'localhost',
    port:3306,
    user:'root',
    password:'111111',
    database:'NewDB'
};

var  poor = mysql.createPool(options);
poor.getConnection(function (error,connection) {
    handlerError('连接',error);
    connection.release();
});

router.post('/',function (req,res) {
    var username = req.body.username;
    var password = req.body.password;

    poor.getConnection(function (error,connection) {
        var selectName = `select * from user where username='${username}'`;
        connection.query(selectName,function (error,results) {
            if(!handlerError('查询',error)) return;
            if(results.length != 0){
                var user = results[0];
                if(user.password == password){
                    res.send('登录成功');
                }else{
                    res.send('密码错误');
                }
            }else{
                res.send('用户名不存在');
            }
            connection.release();
        });


    });
});



// var connection = mysql.createConnection(options);
// connection.connect(function (error) {
//      handlerError("连接",error);
// });


// router.post('/',function (req,res) {
//     // console.dir(req.body);
//     var username = req.body.username;
//     var password = req.body.password;
//
//     //ES6写法  模板字符串
//
//     var selectUsername = `select * from user where username = '${username}'`;
//     connection.query(selectUsername,function (error,results) {
//        if(!handlerError('查询',error)) return;
//         if(results.length != 0){
//             var user = results[0];
//             if(user.password == password){
//                 res.send('登录成功');
//             }else{
//                 res.send('密码错误');
//             }
//         }else{
//             res.send('用户不存在');
//         }
//     });
// });
module.exports = router;