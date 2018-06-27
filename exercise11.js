const http = require('http');
const fs = require('fs');

const [, , port, filePath] = process.argv;

const server = http.createServer((req, res) => {
    const readStream = fs.createReadStream(filePath);
    readStream.on('open', () => readStream.pipe(res));
    readStream.on('error', console.error);
});
server.listen(port);
