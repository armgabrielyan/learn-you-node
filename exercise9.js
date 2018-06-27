const http = require('http');
const concatStream = require('concat-stream');

const [, , ...urls] = process.argv;
let contents = [], 
    count = 0;

urls.forEach(url => {
    http.get(url, res => {
        res.setEncoding('utf-8');
        res.pipe(concatStream(data => {
            contents.push(data);
            count++;
            if (count === urls.length) {
                contents.forEach(content => console.log(content));
            }
        }));
    }).on('error', console.error);
});
