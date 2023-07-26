fetch ("https://jsonplaceholder.typicode.com/todos/1")
.then(function(data){
    return data.json()
})
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
})

//or

async function fetchApi(){
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const result1 = result.json()
    return result1
}
fetchApi()