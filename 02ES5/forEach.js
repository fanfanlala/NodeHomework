/**
 * Created by dllo on 17/8/1.
 */
//forEach 是Array新方法中最基本的一个,就是遍历,循环
/*
* 参数1:遍历的数组内容
* 参数2:对应的是数组索引
* 参数3:数组本身
* */
// [3,4,52,3].forEach(console.log);

//1.JS形式的foreach
// [].forEach(function (value,index,array) {
//
// });

//2.JQ形式的forEach
// $.each([],function (index,value,array) {
//
// });

//3.用foreach 求数组的平均数
// var result = 0;
// var num =0;
// [2,3,1,2].forEach(function (value,index,array) {
//     result += value;
//     num = index + 1;
// })
// console.log(result/num);

//4.forEach 参数回调函数
var database = {
    user:["张含韵","江一燕","李小龙"],
    sendEmail:function (user) {
        if(this.isValidUser(user)){
            console.log("你好,"+user);
        }else{
            console.log("抱歉," + user +",你不是本家人");
        }
    },
    isValidUser:function (user) {
        return /^张/.test(user);
    }
};

database.user.forEach(database.sendEmail,database);

//forEach 不会遍历空的元素
var array = [45,66,33];
delete array[1];
console.log(array);
console.log(array.length);//长度仍然为3
array.forEach(console.log);