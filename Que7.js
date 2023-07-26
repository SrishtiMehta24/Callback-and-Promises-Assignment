async function api1(){
    const api = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const result = api.json()
    return result
}
api1()