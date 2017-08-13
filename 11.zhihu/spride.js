/**
 * Created by dllo on 17/8/12.
 */
var webpage = require('webpage');
var page = webpage.create();
phantom.outputEncoding = 'utf-8'

var fs= require('fs')
page.onConsoleMessage = function (msg,lineNum,sourceId) {
    console.log('CONSOLE:'+msg);
}

page.open('http://daily.zhihu.com/',function (status) {
    if(status === 'success'){
        console.log('成功')
        console.log(page.title);

        page.includeJs('https://code.jquery.com/jquery-3.2.1.min.js',function () {
            setTimeout(function () {
                var arr = page.evaluate(function () {
                    var imgArr = [];
                    //图片
                    $("img").each(function (index,element) {
                        var imgstr = $(element).attr('src')
                        var reg = /^http.{1,}.jpg$/g
                        var isPush = reg.test(imgstr)
                        if(isPush){
                            imgArr.push(imgstr) ;
                        }
                    })
                    return imgArr;
                })
                fs.write('./img.json',arr,'w');
                phantom.exit(0);
            },2000)


            //内容
            var content = page.evaluate(function () {
                var contentArr = [];
                $('.row .col-lg-4 .wrap .box .link-button .title').each(function (index,element) {
                    contentArr.push($(element).text())
                })
                return contentArr;
            })
            fs.write('./content',content,'w');


        })

    }else{
        console.log('失败')
        phantom.exit(0);
    }
})