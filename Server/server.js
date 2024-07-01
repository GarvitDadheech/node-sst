const http= require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    // Routing based on request URL
    if (req.url === '/login') {
        res.write('<html><head><title>Login</title></head><body>');
        res.write('<h1>Hello Login</h1>');
        res.write('</body></html>');
    } else if(req.url === '/') {
        const filePath = path.join(__dirname,'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/html');
                res.end('Internal Server Error');
                return;
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('Not Found');
    }
    });

const host = 'localhost';
const port = 3000;
server.listen(port,host,() => {
    console.log(`Server running on http://${host}:${port}`);
});