/**
 * Created by dllo on 17/8/9.
 */
var webpage = require('webpage');
var page = webpage.create();
phantom.outputEncoding = 'utf-8';

var fs = require('fs');
page.onConsoleMessage = function (msg,lineNum,sourceId) {
    //console.log('CONSOLE:'+msg);
};
page.open('https://www.douban.com',function (status) {
   if(status === 'success'){
       console.log('成功');
       console.log(page.title);

       page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js',function () {
           setTimeout(function () {
               var arrString = page.evaluate(function () {
                   var arr = [];
                   $("#anony-video .wrapper .main .video-list li .video-cover a").each(function (index, element) {
                       var str = $(element).css('background-image').replace('(','');
                       var str1 = str.replace(')','');
                       var str2 = str1.replace('url','');
                       arr.push(str2);
                   });
                   return arr;

               })
               fs.write('./douban.json',arrString,'w');
               phantom.exit(0);
           },5000);
       })
   } else{
       console.log('失败');
       phantom.exit(0);
   }

});