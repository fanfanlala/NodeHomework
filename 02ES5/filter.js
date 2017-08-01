/**
 * Created by dllo on 17/8/1.
 */
//filter  指数组filter后,返回过滤后的新数组
// var data = [2,3,4,5,0];
// var arrayFilter = data.filter(function (item) {
//     return item;
// });
// console.log(arrayFilter);
//
var users = [
    {name: "张含韵", "email": "zhang@email.com"},
    {name: "江一燕",   "email": "jiang@email.com"},
    {name: "李小璐",  "email": "li@email.com"}
];

var emailsZhang = users
// 获得邮件
    .map(function (user) { return user.email; })
    // 筛选出zhang开头的邮件
    .filter(function(email) {  return /^zhang/.test(email); });

console.log(emailsZhang.join(", ")); // zhang@email.com