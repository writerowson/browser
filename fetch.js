console.log(11111)
console.log(22222)
setTimeout(() => console.log('fxdfszd'), 5000)
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(444444)
console.log(65666)


for (let index = 0; index < 40000; index++) {
    const element = [index];
    console.log(index)
}