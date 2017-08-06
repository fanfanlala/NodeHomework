/**
 * Created by dllo on 17/8/5.
 */
var express = require('express');
var mysql = require('mysql');
var handleError = require('./handlerError');
var router = express.Router();

// router.get('/',function (req,res) {
//     res.render('loginSuccess');
// });
module.exports = router;

var options = {
    host:'localhost',
    port:3306,
    user:'root',
    password:''
};
var connect = mysql.createConnection(options);
connect.connect(function (error) {
    handleError('连接',error);
});


var useDBSQL = 'use login';
connect.query(useDBSQL,function (error) {
    handleError('使用数据库',error);
});

router.get('/',function (req,res) {
    var username = req.query['username'];
    var password = req.query['password'];

    var selectSQL = 'select * from information where   username='+username;
    connect.query(selectSQL,function (error,results) {
        if(!handleError('查询数据库',error)) return;
        if(results.length != 0){
            res.send('登录成功');
        }else{
            res.send('登录失败');
        }
    });
});






