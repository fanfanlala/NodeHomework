//1.创建文件,文件夹
var fs = require('fs');
fs.createWriteStream('1.txt');


//2.open
/*
* 参数1:文件路径
* 参数2:文件打开的行为  后可以加一个参数2.0 :设置文件模式(权限)
* 参数3:回调函数
*
* */

// fs.open('1.txt','r',function (err,fd) {
//     if(err){
//         return console.error('错误'+err);
//     }
//     console.log('成功'+fd);
// });

//2.utimes 修改文件时间戳
/*
* 参数1:文件路径
* 参数2:访问时间
* 参数3:修改时间
* 回调函数
* */
// fs.utimes('1.txt',atime,mtime,function (err) {
//     if(err) return;
//     console.log("time update");
//     console.log(atime);
// });

//3.watchFile  文件或目录监视
/*
*对文件进行监视,并且在监视到文件被修改时执行处理
*
* 参数1:文件路径
* 参数2:persistent true 表示持续监视,不退出程序 interval 单位毫秒,表示每隔多少毫秒监视一次文件
* 参数3:文件发生变化时回调 有两个参数:curr为一个fs.Stat对象,被修改后文件,prev,一个fs.Stat对象,表示修改前对象
* */


// var fs = require('fs');
// var path = require('path');
// var file1 = path.resolve('./1.txt');
// fs.watchFile(file1,{
//     interval:20
// },function (curr,prev) {
//         if (Date.parse(prev.ctime) == 0) {
//             console.log('文件被创建');
//         } else if (Date.parse(curr.ctime) == 0) {
//             console.log('文件被删除');
//         } else if (Date.parse(curr.mtime) != Date.parse(prev.mtime)) {
//             console.log('文件有修改');
//         }
//     }
// );

//4.unwatchFile 取消对文件进行监视
/*
* 参数1:文件路径
* 参数2:取消监听事件  如果不指定,则取消所有监听事件
* */

var fs = require('fs');
var path = require('path');
var file1 = path.resolve('./1.txt');
var listener = function (curr,prev) {
    console.log('监视文件发生修改');
};
fs.watchFile(file1,{interval:20},listener);
//取消监视文件
//当前程序程序结束退出
fs.unwatchFile(file1,listener);

//5.link
/*
* 参数1:文件原来的路径,
* 参数2:新改变后的路径,
* 参数3:回调函数
* */

fs.link('./1.txt','./2.txt',function (error) {
    if(!error){
        console.log('成功');
    }else{
        console.log('error');
    }
});
