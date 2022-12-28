// node has access to OS level functionality, like networkin tools. This allows us to build servers. 

// node ships with the http internal module, it is an abstraction of OS networking features. You should almost never use it 
// for building your API's. Use Express instead.  

import http from 'http';


//points to the ip address of your local machine
const host = 'localhost';

//entry point for the server to access your machine. A port can only be used for one server. 
const port = 3001;

//creates a server using http.createServer. This method takes a callback that handles the request and response, which are 
//taken in as its arguments.You create the routes for the server in this callback, these routes utilize the req and res data. 
//routes are made up of two things, a path and a request verb.

const server = http.createServer((req, res) => {
    //when the server receives a post req it streams in as a buffer of bytes. So you have to collect them all and put them
    //together into the data the user intended. 
    if(req.method === "POST"){
        let body = ""

        //you have to register some events on the request object that will fire whenver new data comes in, that will send that data 
        //to the body to be collected so we can look at it. Do this using req.on.
        req.on("data", chunk => {body += chunk})

        //this is where we would insert the data into the db
        req.on("close", () => {console.log(body)})

        //you have to send back a response so the browser knows the req was recieved/handled. 
        //you should also use writeHead to set the status code.
        res.end('ok')
        res.writeHead(201)
    }else{
        res.writeHead(200)
        res.end('hi')
    }
}, )

//sets up the port used for the server. 
// server.listen(port, host, () => {
//     console.log(`Server listening on ${host}:${port}`)
// })

//Learn and use Postman for testin API's   


