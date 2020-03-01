function onSuccess () {
    console.log("Hurray ✔");
}

function onError () {
    console.log("💩")
}

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve();
    reject();
  }, 3000);
})

promise.then(onSuccess);
promise.catch(onError);

// console.log(promise)

let p = new Promise((resolve, reject) => {
    let a = 1 + 4
    if (a == 6) {
        resolve('✔')
    } else {
        reject('💩💩💩')
    }
})

p.then(message => {
    console.log('This is the then ' + message)
}).catch(message => {
    console.log('This is the catch ' + message)
})
