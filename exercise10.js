const net = require('net');

const format = number => number < 10 ? `0${number}` : number;
const formatDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = format(date.getMonth() + 1);
    const day = format(date.getDate());
    const hours = format(date.getHours());
    const minutes = format(date.getMinutes());
    return `${year}-${month}-${day} ${hours}:${minutes}\n`;
};

const server = net.createServer(socket => {
    socket.end(formatDate());
});
server.listen(process.argv[2]);
