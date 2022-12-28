//A much easier way to create a server is with the npm package express. you should also install body-parser and morgan

//express is a framework for building servers

//body-parser is a middleware that parses incoming requests. It will allow us to look at the request data without doing chunks
//anymore. 

//morgan is a middleware that is for logging incoming requests, that way we know an actual request came in. Great for debugging.

//middleware is basically a piece of functionality that sits in between what you eventually want to do with a server req and when
//when it came in. It manipulates the req in some way before sending it to another middleware, or the controller.

import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';

const port = 8080;

//initializes express
const app = express();

//to setup middleware, do app.use()

//basically makes it so if someone passes data on a query string itll be parsed. Does the same thin as bp.json(), but instead 
//for query strings, and it puts the data in an object attached to req called query. 
app.use(bp.urlencoded({extended: true}))
// allow us to parse the data on the body of a post request into json. and add it to an object that gets attached to the incoming 
//req called body. 
app.use(bp.json())
app.use(morgan('dev'))

const db = []

app.post('/todo', (req, res) => {
    const newTodo = {id: Date.now(), text: req.body.text}

    db.push(newTodo)

    res.json(newTodo)
})

app.get('/todo', (req, res) => {
    res.json(db)
})

//You can create dynamic routes in express using query params in the path
app.get('/todo/:id', (req, res) => {
    const todo = db.find(item => {
        return item.id === +req.params.id
    })

    res.json(todo)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})