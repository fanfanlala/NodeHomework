/**
 * Created by dllo on 17/8/8.
 */
var download = require('./download');
var request = require('request');
var cheerio = require('cheerio');

var options = {
    url: 'https://www.douban.com/',
    headers: {
        'Host': 'www.douban.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'
    }
}
request(options,function (error,response,body) {
   var $ = cheerio.load(body) ;
   //热点
    //1.图片
    var hotImg = [];
    var hotDecript = [];
    var hotTitle = [];
    var hotTipc = [];
    $(".albums ul li .pic a img").each(function (index,element) {
        hotImg.push($(element).attr('data-origin'));
        download($(element).attr('data-origin'),'douban','hot'+index+'.jpg');
    });
    //图片描述
     $(".albums ul li a:nth-child(2)").eq(2).each(function (index,element) {
         hotDecript.push($(element).text());
     });
    //2.文字
    $(".notes ul li a").each(function (index,element) {
        hotTitle.push($(element).text());
    });


    //时间部分
    var arr_time_arr=[];
    $("#anony-time>.wrapper>.main>ul>li>a>img").each(function (index, element) {
        var a = $(element).attr('src');
        var b={
            src:a
        };
        arr_time_arr.push(b);
        download(a, 'douban', 'time'+index + '.jpg');
    });

    $("#anony-time>.wrapper>.main>ul>li>a:nth-child(2)").each(function (index, element) {
        var a = $(element).text();
        arr_time_arr[index].text=a;
    });

    $("#anony-time>.wrapper>.main>ul>li>span").each(function (index, element) {
        var a = $(element).text();
        arr_time_arr[index].span=a;
    });

    //视频
    // var videoArr = [];
    // $("#anony-video .video-list li .video-cover a").each(function (index, element) {
    //     console.log($(element).css('background'));
    // });


    //正在热映
    var play = [];
    $('.main .movie-list ul li .pic  a img').each(function (index,element){
        var thePlay = {img:$(element).attr('data-origin')};
        play.push(thePlay)
        download($(element).attr('data-origin'),'douban','play'+index+'.jpg');
    });

    $('.main .movie-list ul li .title  a').each(function (index,element){
        play[index].title = $(element).text();
    });

    $('.main .movie-list ul li .rating  i').each(function (index,element){
        play[index].score = $(element).text();
    });

    //热门小组
      var groupArr = [];
    $(".main .group-list ul li .pic a img").each(function (index,element){
        var theGroup = {img:$(element).attr('data-origin')};
        groupArr.push(theGroup)
        download($(element).attr('data-origin'),'douban','group'+index+'.jpg');
    });

    $('.main .group-list ul li .info .title a').each(function (index,element){
        groupArr[index].title = $(element).text();
    });

    $('.main .group-list ul li .info').each(function (index,element){
        groupArr[index].number = $(element).text();
    });

    //遍历新书快递部分
    var book = [];
    $('#anony-book>.wrapper>.main>.mod>.book-list>ul>li>.pic>a>img').each(function (index,element) {
        var item = {
            src :$(element).attr('data-origin')
        }
        download($(element).attr('data-origin'),'douBan','book'+index+'.jpg')
        book.push(item)
    })

    $('#anony-book>.wrapper>.main>.mod>.book-list>ul>li>.title>a').each(function (index,element) {
        book[index].title = $(element).text();
    })

    //遍历音乐部分

    //豆瓣新碟榜
    var itemsMusic = [];
    $('#anony-music>.wrapper>.main>.album-list>ul>li>.pic>a>img').each(function (index,element) {
        var item = {
            src :$(element).attr('data-origin')
        }
        download($(element).attr('data-origin'),'douBan','music'+index+'.jpg')
        itemsMusic.push(item)
    })
    $('#anony-music>.wrapper>.main>.album-list>ul>li>.title>a').each(function (index,element) {
        itemsMusic[index].title = $(element).text()

    })

    $('#anony-music>.wrapper>.main>.album-list>ul>li>.rating>i').each(function (index,element) {
        itemsMusic[index].rating = $(element).text()
    })

    //热门歌单
    var itemsHotMusic = [];
    $('#anony-music>.wrapper>.main>.programme-list>ul>li>.pic>img').each(function (index,element) {
        var item = {
            src :$(element).attr('src')
        }
        itemsHotMusic.push(item)
        download($(element).attr('src'),'douban','sing'+index+'.jpg')
    });

    $('#anony-music>.wrapper>.main>.programme-list>ul>li>.title').each(function (index,element) {
        itemsHotMusic[index].title1 = $(element).text()
    })
});