/**
 * Created by dllo on 17/8/1.
 */
//every
//数组或字符串每个元素都要满足这个条件
var scores = [5, 8, 3, 10];
var current = 7;

function higherThanCurrent(score) {
    return score > current;
}
if (scores.every(higherThanCurrent)) {
    console.log("朕准了！");
} else {
    console.log("来人，拖出去斩了！");
}