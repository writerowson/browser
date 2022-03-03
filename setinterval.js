// setInterval(() => {
//     console.log('tik tik tik tik '), 1000
// })
let second = 0
const timeID = setInterval(() => {
    // second++;
    console.log(second++);
    if (second > 9) {
        clearInterval(timeID)
    }
}, 1000)



setTimeout(() => console.log("I am Superman"), 1000)
console.log("I am Superwoman");