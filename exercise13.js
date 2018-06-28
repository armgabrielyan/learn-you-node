const http = require('http');
const url = require('url');

const [, , port] = process.argv;

const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        return console.error('Error occurred: only GET requests are processed.')
    }

    const { query, pathname } = url.parse(req.url, true);
    const date = new Date(query.iso);
    let response = {};

    if (pathname === '/api/parsetime') {
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        response = { hour, minute, second };
    } else if (pathname === '/api/unixtime') {
        const unixtime = date.getTime();
        response = { unixtime };
    }

    if (response) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(response));
    } else {
        res.writeHead(404);
    }

    res.end();
});
server.listen(port);
