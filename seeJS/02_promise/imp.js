// function watchTutorialCallback(callback, errorCallback) {
//     let userLeft = false
//     let userWatchingCatMeme = false
  
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: '😭😭'
//       })
//     } else if (userWatchingCatMeme) {
//       errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat 😽😺' 
//       })
//     } else {
//       callback('Thumbs up and Subscribe 👍')
//     }
//   }
  
function watchTutorialCallbackPromise() {
  let userLeft = false
  let userWatchingCatMeme = true
  return new Promise((resolve, reject) => {    
    if (userLeft) {
      reject({
        name: 'User Left', 
        message: '😭😭'
    })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat 😽😺' 
    })
    } else {
      resolve('Thumbs up and Subscribe 👍')
    } 
  })
}

watchTutorialCallbackPromise().then(message => {
    console.log(message)
}).catch(reject => {
    console.log(reject.name + ' ' + reject.message)
})

