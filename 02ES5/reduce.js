/**
 * Created by dllo on 17/8/1.
 */
//reduce
var sum = [1, 2, 3, 4].reduce(function (previous, current, index, array) {
    return previous + current;
});

console.log(sum);

//二维数组的扁平化
var matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

// 二维数组扁平化
var flatten = matrix.reduce(function (previous, current) {
    return previous.concat(current);
});

console.log(flatten);

//reduceRight
var data = [1, 2, 3, 4];
var specialDiff = data.reduceRight(function (previous, current, index) {
    if (index == 0) {
        return previous + current;
    }
    return previous - current;
});

console.log(specialDiff);