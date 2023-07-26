fetch("https://jsonplaceholder.typicode.com/posts/123456789")
.then(function(data){
    return data.json()
})
.then(function(result){
    console.log(result);
})
.catch(function(){
    console.log("Data does not found!");
})