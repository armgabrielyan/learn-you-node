const http = require('http');
const fs = require('fs');

const [, , port] = process.argv;

const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return console.error('Only POST methods ')
    }
    
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('error', console.error);
    req.on('end', () => {
        res.end(body.toUpperCase());
    });
});
server.listen(port);
