const http= require('http');
const server = http.createServer((req,res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    // Routing based on request URL
    if (req.url === '/login') {
        res.write('<html><head><title>Login</title></head><body>');
        res.write('<h1>Hello Login</h1>');
        res.write('</body></html>');
    } else {
        res.write('<html><head><title>Node JS SST</title></head><body>');
        res.write('<h1>I AM GAMB8</h1>');
        res.write('</body></html>');
    }

    res.end();
});

const host = 'localhost';
const port = 3000;
server.listen(port,host,() => {
    console.log(`Server running on http://${host}:${port}`);
});