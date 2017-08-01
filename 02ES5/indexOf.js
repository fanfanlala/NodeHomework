/**
 * Created by dllo on 17/8/1.
 */
//indexOf方法在字符串中
var data = [2, 5, 7, 3, 5];

console.log(data.indexOf(5, "x"));
console.log(data.indexOf(5, "3"));

console.log(data.indexOf(4));
console.log(data.indexOf("5"));

//lastIndexOf  lastIndexOf是从字符串的末尾开始查找，而不是从开头。还有一个不同就是fromIndex的默认值是array.length - 1而不是0.

var data = [2, 5, 7, 3, 5];

console.log(data.lastIndexOf(5));
console.log(data.lastIndexOf(5, 3));

console.log(data.lastIndexOf(4));