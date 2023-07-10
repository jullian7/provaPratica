res.setHeader('Conten-Type', 'application/json');
const server = http.createServer((req, res) => {
res.end('okay');
});

server.on('clientError', (err, socket) => {
    socket.end(http.createServer)
    if(err.socket === 'clientError' || !code.writable){
        return;
    }
});


