const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Video 3 Recorded')
    }, 3000);
    
})

recordVideoThree.then(message => {
    console.log(message)
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {
    console.log(message)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {
    console.log(message)
})
