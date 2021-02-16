const values = [3,11,7,2,9,10];
const add = arr => arr.reduce((a, b) => a + b, 0);
var sum = add(values);
console.log(sum)
const arrMax = arr => Math.max(...values);
var max = arrMax(values);
console.log(max)
const arrMin = arr => Math.min(...values);
var min = arrMin(values);
console.log(min)