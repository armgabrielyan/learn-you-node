const http = require('http');

const [, , url] = process.argv;

http.get(url, res => {
    let content = '';
    res.on('data', data => content += data);
    res.on('error', console.error);
    res.on('end', () => {
        console.log(content.length);
        console.log(content);
    });
}).on('error', console.error);
