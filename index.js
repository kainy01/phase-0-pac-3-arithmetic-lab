function add(x,y){
    return x+y
}
function subtract(x,y){
    return x-y
}
function multiply(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}
function increment(x){
    return ++x
}
function decrement(x){
    return --x
}
function makeInt(n){
    const parsed = parseInt(n, 10);
    return isNaN(parsed) ? NaN : parsed;
}
function preserveDecimal(n){
    const parsed = parseFloat(n);
  return isNaN(parsed) ? NaN : parsed;
}