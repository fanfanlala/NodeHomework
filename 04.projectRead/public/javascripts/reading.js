/**
 * Created by dllo on 17/8/3.
 */
//图片公告的鼠标移入移出
$(".sectionImg").mouseover(function () {
    $(this).parent().prev().css("display","block");
    $(this).parent().prev().css("transition","all 10s");
    $(this).css("transform","scale(1.2)");
    $(this).css("transition","all 1s");
})
$(".sectionImg").mouseout(function () {
    $(this).parent().prev().css("display","none");
    $(this).css("transform","scale(1.0)")
})
$(".sectionWord").mouseover(function () {
    $(this).css("display","block");
})
$(".sectionWord").mouseout(function () {
    $(this).css("display","none");
})


//TING移入移出
$(".tingImg").mouseover(function () {
    $(this).next().css("display","block");
    $(this).next().css("transition","all 1s");
})

$(".tingImg").mouseout(function () {
    $(this).next().css("display","none");
    $(this).next().css("transition","all 1s");
})

$(".mask").mouseover(function () {
    $(this).css("display","block");
})
$(".mask").mouseout(function () {
    $(this).css("display","none");
})
//点击回到顶部
$(".topImg").click(function() {
    $("html,body").animate({scrollTop:0}, 500);
    $(".navBar").fadeIn();
});


//点击登录
$(".clickLogin").click(function () {
    $(this).css("color","black");
    $(".clickLogin .clickLine1").css("display","block");

    $(".design").css("color","lightgray");
    $(".design .clickLine2").css("display","none");


    $(".myInput").css("display","block");
    $(".designHide").css("display","none");
    $(".clickSLogin").css("display","block");
})
//点击注册
$(".design").click(function () {
    $(this).css("color","black");
    $(".design .clickLine2").css("display","block");

    $(".clickLogin").css("color","lightgray");
    $(".clickLogin .clickLine1").css("display","none");

    $(".myInput").css("display","none");
    $(".designHide").css("display","block");
    $(".clickSLogin").css("display","none");
})

$(".login").click(function () {
    $(".theClick").show();
    $(".clickMask").show();
    $(".delete").show();
})

//点击删除
$(".delete").click(function () {
    $(".theClick").hide();
    $(".clickMask").hide();
    $(".delete").hide();
})

$(document).on("mousewheel DOMMouseScroll", function (e) {

    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox


//        if (delta > 0) {
//            // 向上滚
//            $(".navBar").fadeIn("slow");
//            console.log("向上滚");
//        } else if (delta < 0) {
//            // 向下滚
//            console.log("向下滚");
//        }

    if($(this).scrollTop() >= 300){
        $(".navBar").fadeOut("slow");
    }else if($(this).scrollTop()<=300){
        $(".navBar").fadeIn("slow");
    }

    if($(this).scrollTop() >= 1500){
        $(".topImg").fadeIn();
    }else{
        $(".topImg").fadeOut();
    }
});
