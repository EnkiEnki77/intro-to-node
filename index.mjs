// type node in the terminal to start utilizing the node REPL its 
// a console just like the one in the browser.

// Node is a JS runtime environment. Similar to how the browsers are.

// When you need to test client facing things in nodejs such as the DOM, there are mocks out there you can utilize.

// Node has a global object, it is similar to the browsers window object.
// Some other important built in objects are: (dirname and filename dont exist when using ES modules.)

//__dirname: returns a string version of the directory name of the file its used in

//__filename: similar to __dirname but returns the file name

//process: the object where everything about the environment is stored. One of the most important things it shows is environment variables.

// These globals are for creating and exposing modules throughout your app.
// exports 
// module
// require



// MODULES

// A module is basically a transportable piece of code that is protected from leaking into global space, and is shared across 
// multiple JS files so there is no conflict. 

// Bundlers such as webpack are what allow you to use modules.

// Node has two different types of modules. Common modules

// Common modules utilize globals such as export or require.

// Say we have a function like this. In the browser just having it in the file like this itll be attached to the gloabl, so it is 
// to any other JS file useing window. In node there is no window though, and nothing gets attached to the global by default. This
// is because in node every file is wrapped in its own module in order to avoid memory leaks. so in node to make something exportable 
// to another file you have to use module.exports

const action = () => {
    console.log('Hello')
}

// This way of going about modules is called commonjs. Its node's default syntax for modules. 
// module.exports = action

// The new way of doing modules is called ES modules. you can enable it by adding the .mjs extension to your files. 
// It is the same syntax used for exporting/importing modules in React. It allows you to just put export before a module. 

 export const action2 = () => {
    console.log('Hello')
}

// Node has a ton of internal modules. Here are a few of the most important ones.

//fs: used to interact with the files system
//path: used for manipulation of file paths
//child_process: used for spawning sub processes in the background.
//http: interact with OS level networking. useful for creating servers. 


