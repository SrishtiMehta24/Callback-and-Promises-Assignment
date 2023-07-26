function manipulateString(string){
    let manipulatedString = string.toUpperCase();

    function logString(){
        console.log(`The manipulated string is : ${manipulatedString}`);
    }
    return logString();
}
console.log(manipulateString("srishti mehta"))