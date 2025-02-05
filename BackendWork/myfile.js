function sum(a,b){
    return a+b;
}
function mul(a,b){
    return a*b;
}
const obj = {
    sum: sum,
    mul: mul
};
module.exports = obj;