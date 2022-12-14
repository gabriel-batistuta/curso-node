const express = require('express');

const app = express()

app.get('/home', (req, res) => {
    res.contentType("aplication/html")
    res.status(200).send("<h1>Hello, world!</h1>");
})

app.get('/users', (req, res) => {
    const users = [
        {
            "name": "John Titor",
            "email": "jtitor@gmail.com"
        },
        {
            "name": "Jane Doe",
            "email": "jdoe@gmail.com"
        }
    ]

    res.status(200).json(users);
})

const port = 8080;

app.listen(port, () => {console.log(`listening with express on port ${port}!`)})