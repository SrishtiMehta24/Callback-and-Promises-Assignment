function doubleTheValue(arr, fun){
    let doubleArray = arr.map(fun);
    return doubleArray;
}
function double(number){
    return number*2;
}
console.log(doubleTheValue([1,2,3,4,5,6], double))
