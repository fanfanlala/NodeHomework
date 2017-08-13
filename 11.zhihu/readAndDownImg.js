/**
 * Created by dllo on 17/8/12.
 */
var fs = require('fs');
var download = require('./download');

fs.readFile('./img.json','utf-8',function (error,data) {
    var array = data.split(',');
    array.forEach(function (item,index) {
        download(item,'image',index+'.jpg');
    })
})

fs.readFile('./content','utf-8',function (error,data) {
    var readArr = data.split(',');
    console.log(readArr);
})

