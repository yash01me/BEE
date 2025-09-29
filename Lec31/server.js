const { WebSocket } = require("ws"); 

const wss = new WebSocket.Server({ port: 8080 });
wss.on('connection', function (socket) {
  
    console.log(socket);
    socket.send("Hello from server");
});
//app.get('/', (req, res) => res.send('Hello World!'))