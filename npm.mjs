// One of the best parts of node is its packages system. packages are projects containing one or more modules/other packages.
// They are uploaded to npm and can be installed and consumed to your other projects at any time. 

// In order to consume packages in your project, you must add a package.json file to your project. 
// You can write out this file by hand but its better to use the CLI npm (node package manager). If you use npm init it 
// will autocreate a package.json file.

// Get good at finding things you need on the npm website. 

//when using npm you can pass flags to your commands such as --save. flags are basically options you use with a CLI. 

// when you install a npm package it brings with it a folder called node modules which contains all of the modules it depends on. 
// you should always add node modules to git.ignore. 

// the --save flag saves your dependencies into the package.json file, so that when someone pulls your project from github all they
// need to do is npm i to get the node modules folder for those dependencies. 

// package-lock.json locks dependencies into the same version, so there's no conflict. 

// To install a package globally do -g at the end of your command. 

// To use functionality out of a package without actually installing it use npx 

// To see node errors in the console use the network tab

// To make a script that serves a view npm i install serve

// CLI stands for command line interface, its a fancy term for an app that runs in the terminal. Such as npm or node. It is 
// desined to start and complete one off tasks. 