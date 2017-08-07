/**
 * Created by dllo on 17/8/7.
 */
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var handlerError = require('./../public/javascripts/handlerError');

router.get('/',function (req,res) {
    //渲染页面
    res.render('changePass');
});

var options = {
    connectionLimit:3,
    host:'localhost',
    port:3306,
    user:'root',
    password:'111111',
    database:'NewDB'
};

//建立连接池
var pool = mysql.createPool(options);


router.post('/',function (req,res) {
    var nowPass = req.body.nowpass;
    var newPass = req.body.newpass;
    var confirmpass = req.body.confirmpass;

    pool.getConnection(function (error,connection) {
        var selectPass = `select * from user where password='${nowPass}'`;
        connection.query(selectPass,function (error,results) {
            if(!handlerError(error)) return;
            if(results.length != 0){
                var user = results[0];

                if(newPass == confirmpass){
                    // if(newPass.length == 0){
                    //     res.send('修改的密码不能为空');
                    // }
                    pool.getConnection(function (error,connection) {
                        var updateSQL = `update user set password='${newPass}' where username = '${user.username}'`;
                        connection.query(updateSQL,function (error) {
                            handlerError('修改密码',error);
                            res.send('修改密码成功');
                        })
                        connection.release();
                    });
                }else{
                    res.send('修改密码失败');
                }

            }else{
                res.send('该密码不存在');
            }
            connection.release();
        });

    });

});
module.exports = router;
