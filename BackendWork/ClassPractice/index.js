const avg = require('./util');
var average = avg(10,20,30);
function avgSqrt(average){
    return Math.sqrt(average);
}
console.log(avgSqrt(average));