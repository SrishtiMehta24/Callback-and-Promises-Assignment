fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(data){
    return data.json()
})
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
})