const http = require('http');

const [, , url] = process.argv;

http.get(url, res => {
    res.setEncoding('utf-8');
    res.on('data', console.log);
    res.on('error', console.error);
}).on('error', console.error);
