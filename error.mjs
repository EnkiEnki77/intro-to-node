// When node throws an exception, the current process exits with a code of 1. This errors out and stops your program. 
// you can do it manually with process.exit(1)

//You dont want this crashing your whole server, so its important to properly handle errors. 

// if you dont want things to crash console.log the error or set it up where it makes a popup come up.
// If you do want it to crash because its an important feature than just throw the error. It will keep the code from going on.
// import {readFile} from 'fs'
import {readFile} from 'fs/promises'

// This is the callback way of handling errors, if youre not using a promise. 
// const templateCallback = readFile(new URL('index.html', import.meta.url), 'utf-8', (err, data) => {
//     if(err){
//         console.error(err, 'errored out')
//     }else{
//         console.log('Callback data recieved')
//     }
// })


// This is the way to handle promises if youre using async/await. Its supposed to feel synchronous so you use try/catch
// try{
//     const templatePromiseAwait = await readFile(new URL('index.htm', import.meta.url), 'utf-8')
    
// }catch(e){
//     console.error(e, 'errored out')
// }


// This is the way to do things if youre using promises but not async/await.
const templatePromiseThen = readFile(new URL('index.html', import.meta.url), 'utf-8')
.then(res => console.log(res))
.catch(e => console.error(e, 'errored out'))


// In situations where you have no control over the error handling and you need to figure out why somethin is breaking 
// because whoever created a module didnt do it. use process.on('uncaughtException', (e) => console.error(e))




