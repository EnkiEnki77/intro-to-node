// to import modules from other files, use the require function, it takes path to the file containing the module youre
// trying to import from as an argument. 
// const action = require('./server.mjs')

// To import modules in the es module syntax do this. If the export keyword was used on the module it makes it a named export 
// so it must be destructured on import 
import { action2 } from './server.mjs'
// node comes with a version of fs that comes wrapped in promises instead of callbacks.
import {readFile} from 'fs/promises'

// If you dont use the sync version of a fs method it will be asynchronous. Methods are async by default, because you typically 
// dont want things in node to be synchronous.

//because readfile is wrapped in a promis here we have to use await. readFile takes a URL object as an argument. The URL object takes
//two arguments the name of the file youd like to read, and then import.meta.url which is the file youre currently in. It returns 
//a buffer which is all the bytes that make up the file. We're trying to get the html file as a string so we can inject JS into it.
//to do that the buffer thats returned has a toString method. Or readFile also takes in a second argument, a string telling it which 
//format we'd like to be in 'UTF-8' for example
let template = await readFile(new URL('index.html', import.meta.url), 'utf-8');

const data = {
    title: 'Get a code job',
    body: 'Learning node to get a job'
}

