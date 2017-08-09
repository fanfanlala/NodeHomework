/**
 * Created by dllo on 17/8/9.
 */
var webpage = require('webpage');
var page = webpage.create();
var fs = require('fs');

phantom.outputEncoding = 'utf-8';
// page.onConsoleMessage(function (msg,lineNum,sourceId) {
//    //console.log('CONSOLE:'+msg) ;
// });
var url = 'https://www.jd.com/?cu=true&utm_source=baidu-pinzhuan&utm_medium=cpc&utm_campaign=t_288551095_baidupinzhuan&utm_term=0f3d30c8dba7459bb52f2eb5eba8ac7d_0_4b2d4ed3dd9a466c95b8d5fab2732d84';
page.open(url,function (status) {
   if(status == 'success'){
       console.log('成功');
       console.log(page.title);
       page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js',function () {
           setTimeout(function () {
               var arrString = page.evaluate(function () {
                   var imgArr =[];
                   $('.J_sk_list_wrapper .J_sk_list .J_sk_item .sk_item_pic a img').each(function (index,element) {
                       imgArr.push($(element).attr('src'));
                   });
                   return imgArr;
               })
               fs.write('./jd.json',arrString,'w');
               phantom.exit(0);
           },5000);

       })
       
   } else{
       console.log('失败');
       phantom.exit(0);
   }
});