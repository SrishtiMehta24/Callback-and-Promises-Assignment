function greetWithName(name){
    return new Promise(function(resolve, reject){
        if(typeof name !== "string" || name.trim() === ""){
            reject("Invalid Name")
        } else {
            resolve(`Hello, ${name}`)
        }
    })
}
greetWithName(124)
.then(function(user){
    console.log(user);
})
.catch(function(invalid){
    console.log(invalid);
})