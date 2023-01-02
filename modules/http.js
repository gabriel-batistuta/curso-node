const { read } = require('fs');
const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, 'Content-Type', 'text/html');
        res.end("<h1>home page</h1>");
    }

    if (req.url === '/users') {
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
        res.writeHead(200, 'Content-Type', 'aplication/json');
        res.end(JSON.stringify(users));
    }
})

server.listen(port, () => console.log(`Server listening on port ${port}!`))