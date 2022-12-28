import {add} from './myLib.mjs'
import assert from 'assert'

console.log('add()\nShould add two numbers')

try{
    // assert has various methods that returns true or false based on if a piece of code evaluates to being the same as whatever 
    //the second argument is.
    assert.strictEqual(add(1,2), 2)
    console.log('SUCCESS')
}catch(e){
    console.log('FAIL')
    console.error(e)
}