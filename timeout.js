function firstline() {
    console.log("first: I am the first")
}
console.log("second: I am the second")
console.log("thired: I am the thired")
setTimeout(function () {
    console.log('I am using JS');
}, 5000)
setTimeout(() => {
    console.log('I am learning JS');
}, 4000)
setTimeout(firstline, 2000)
console.log("Rowson: I am the Rowson")
console.log("imamul: I am the imamul")
console.log("Imran: I am the Imran")