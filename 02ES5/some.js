/**
 * Created by dllo on 17/8/1.
 */
//some
    //数组或字符串有些元素都要满足这个条件
var scores = [5, 8, 3, 10];
var current = 7;

function higherThanCurrent(score) {
    return score > current;
}

if (scores.some(higherThanCurrent)) {
    alert("朕准了！");
}